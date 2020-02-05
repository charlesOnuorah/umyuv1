import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController, Platform, AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import * as firebase from 'Firebase';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import * as CryptoJS from 'crypto-js';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import { Course } from 'src/app/models';


@Component({
  selector: 'app-pptviewer',
  templateUrl: './pptviewer.page.html',
  styleUrls: ['./pptviewer.page.scss'],
})
export class PPTViewerPage implements OnInit, OnDestroy {  
  courseID: number;
  courses: Course[];
  courseCode: string;
  courseTitle: string;
  mimeType: string;
  fileName: string;
  fileNameTemp: string;
  dirName: string;
  systemBase: string;
  dirBase: string = "/.UMYU/.data/.materials/";
  downloadURL: string = "http://umyu.easystudy.com.ng/materials/";
  // pptSrc: string = "https://devdactic.com/html/5-simple-hacks-LBT.pdf";
  pptSrc: string = "https://file-examples.com/wp-content/uploads/2017/08/file_example_PPT_500kB.ppt";
  isFound: boolean = false;
  courseLists: Array<Course> = [];
  actionFavType: string = "Add";

  zoomValue = 1;
  page = 1;
  totalPages: number;
  isSearchShown = false;
  searchString: string;
  isCaseSensativeSearch = false;
  zoomType: any = 'auto';
  
  rooms = [];
  ref = firebase.database().ref('chatrooms/');
  createRoomCaption: string;
  actionType: number;

  constructor(
    public loadingCtrl: LoadingController,
    private platform: Platform,
    private fileTransfer: FileTransfer,
    private nativeStorage: NativeStorage,
    private activatedRoute: ActivatedRoute,
    private toastCtrl: ToastController,
    private document: DocumentViewer,
    private file: File,
    private router: Router,
    private alertController: AlertController) {
      this.getFavoriteCourses();
      this.nativeStorage.getItem('selectedcourse')
      .then(selectedCourse => {
        this.courseCode = selectedCourse.Code;
        this.courseTitle = selectedCourse.Title;

        this.ref.on('value', resp => {
          this.rooms = [];
          this.rooms = snapshotToArray(resp);          

          this.createRoomCaption = "Create Chat Room";
          this.actionType = 1;
          if (this.rooms !== undefined && this.rooms.length !== 0) {
            this.rooms.forEach(room => {
              if (room.roomname === this.courseCode) {
                this.createRoomCaption = "Select Chat Room";
                this.actionType = 2;
              }
            });
          }
        }); 
      },
      () => {}
    );
  }

  ngOnInit() {
    // Get the ID that was passed with the URL    
    this.activatedRoute.params.subscribe(
      params => {          
        this.courseID = +params['courseid'];
      }
    );
    
    this.fileNameTemp = "powerpointfiletemp" + this.courseID + ".ppt";
    this.fileName = "powerpointfile" + this.courseID + ".ppt";
    this.mimeType = "application/vnd.ms-powerpoint";

    if(this.platform.is('android')) {
      this.systemBase =  this.file.externalRootDirectory + "/Documents";
      this.fileNameTemp = "powerpointfiletemp" + this.courseID + ".pptx";
      this.fileName = "powerpointfile" + this.courseID + ".pptx";
      this.mimeType = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
    } else if(this.platform.is('ios')) {
      this.systemBase =  this.file.documentsDirectory + "/Documents";
    } else if(this.platform.is('desktop')) {
      this.systemBase =  this.file.dataDirectory;
    } else if(this.platform.is('tablet')) {
      this.systemBase =  this.file.dataDirectory;
    } else {
      this.systemBase =  this.file.dataDirectory;
    }
        
    this.dirName = this.systemBase + this.dirBase + ".powerpoints/";

    this.downloadURL = this.downloadURL + "powerpoint/" + this.fileName;
      
		this.platform.ready().then(() => {
      this.verifyMedia().then(() => {});
    });
  }

  async verifyMedia() {

    let loading = await this.loadingCtrl.create({
      message: 'Checking file on local storage, please wait...'
    });
    await loading.present();

    //This is where the media file will be stored, you can change it as you like
    this.file.checkFile(this.dirName, this.fileName).then((success) => {
      loading.dismiss();
      
      // Show downloaded ppt/pptx
      this.showMediaFile();
    })
    .catch((error) => {
      loading.dismiss();
      this.downloadMedia();
    });
  }

  async downloadMedia() {

    let isDownloaded = false;
    
    // Initialize transfer handle
    const transfer = this.fileTransfer.create();

    await this.loadingCtrl.create({
      message: 'Downloading file, please wait...'
    }).then((res) => {
      res.present(); 
      res.onDidDismiss().then((dis) => {});

      setTimeout(() => {
        if (isDownloaded === false) {
          // Abort active transfer:
          transfer.abort();
  
          // Remove incomplete downloaded file
          this.removeTempFile('~' + this.fileNameTemp).then(() => {});
  
          // Dismiss loading controller
          this.loadingCtrl.dismiss();
  
          // Send failure notification to user
          this.presentToast("File download timedout! Please retry again");
        }
      }, 60000);
    });

    transfer.onProgress((progressEvent) => {
      var counter = Math.floor(progressEvent.loaded / progressEvent.total * 100);
    });

    // Downloading File to Device
    transfer.download(this.downloadURL, this.dirName + this.fileNameTemp)
    .then(() => {
      
      isDownloaded = true;
      this.loadingCtrl.dismiss();

      // Send success notification to user
      this.presentToast("Download completed!");  

      // Process downloaded media
      this.processMedia().then(() => {}).catch(() => {});
    })
    .catch(() => {
      isDownloaded = false;
      this.loadingCtrl.dismiss();

      // Send failure notification to user
      this.presentToast("File download failed!");
    });
  }
  
  async showMediaFile() {
    // Get media URL and convert to an accessible path
    
    let loading = await this.loadingCtrl.create({
      message: 'Reading file, please wait...'
    });
    await loading.present();    

    return await this.file.readAsText(this.dirName, this.fileName)
    .then((fileContent: string) => {
      loading.dismiss();
      this.decryptFileContent(fileContent)
      .then((fileContent) => {        
        
        /*
        * File reader provides us with an incorrectly encoded base64 string.
        * So we have to fix it, in order to upload it correctly.
        */
        // let encodingType = "data:"+ this.mimeType + ";base64,";
        let originalBase64 = fileContent.split(',')[1]; // Remove the "data:application..." string.
        let decodedBase64 = atob(originalBase64); // Decode the incorrectly encoded base64 string.
        let encodedBase64 = btoa(decodedBase64); // re-encode the base64 string (correctly).
        // let newBase64 = encodingType + encodedBase64; // Add theencodingType to the string.
        
        this.convertBase64ToBlob(encodedBase64, this.mimeType)
        .then((blob) => {
          this.writeFileContent(this.dirName, this.fileNameTemp, blob)
          .then(() => {
            // let win: any = window; // hack compilator
            // this.pptSrc = win.Ionic.WebView.convertFileSrc(this.dirName + this.fileNameTemp);
            // this.pptSrc2 = this.downloadURL; //"https://file-examples.com/wp-content/uploads/2017/08/file_example_PPT_500kB.ppt";
          });
        })
        .catch(() => {});        
      })
      .catch(() => {});
    })
    .catch((error) => {
      loading.dismiss();
      this.presentToast("Error Reading File! " + JSON.stringify(error));
    });
  }
    
  // showMediaFile() {
  //   const options: DocumentViewerOptions = {
  //     title: 'PPT Viewer'
  //   }
  //   // Get media URL and convert to an accessible path
  //   let win: any = window; // hack compilator
  //   this.pptSrc = win.Ionic.WebView.convertFileSrc(this.dirName + this.fileName);
  //   this.document.viewDocument(this.pptSrc, 'application/vnd.ms-powerpoint', options);
  // }  
  
  /**
  Convert a base64 string in a Blob according to the data and contentType.
  @param b64Data {String} Pure base64 string without contentType
  @param contentType {String} the content type of the file i.e (application/vnd.ms-powerpoint - text/plain)
  @see http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript 47
  @return Blob
  */
  async convertBase64ToBlob(b64Data, contentType): Promise<Blob> {
    let loading = await this.loadingCtrl.create({
      message: 'Converting file, please wait...'
    });
    await loading.present();

    contentType = contentType || "";
    let sliceSize = 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);
      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      var byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    var blob = new Blob(byteArrays, {type: contentType});
    loading.dismiss();
    return blob;
  }

  async processMedia() {
    await this.readFileContent(this.dirName, this.fileNameTemp)
    .then((fileContent) => {
      if (fileContent.length !== 0) {
        this.encryptFileContent(fileContent)
        .then((encryptedFile) => {
          if (encryptedFile.length !== 0) {
            this.writeFileContent(this.dirName, this.fileName, encryptedFile)
            .then(() => {
              this.removeTempFile(this.fileNameTemp).then(() => {
                this.showMediaFile();
              });
            });
          }
        });
      }
    });
  }

  async readFileContent(dirName: string, fileName: string): Promise<string> {
    let emptyString = "";
    let isRead = false;

    await this.loadingCtrl.create({
      message: 'Reading file, please wait...'
    }).then((res) => {
      res.present(); 
      res.onDidDismiss().then((dis) => {});

      setTimeout(() => {
        if (isRead === false) {
    
          // Dismiss loading controller
          this.loadingCtrl.dismiss();
  
          // Send failure notification to user
          this.presentToast("File retrieval timedout! Please retry again");
        }
      }, 30000);
    });
    
    return await this.file.readAsDataURL(dirName, fileName)
    .then((fileContent: string) => {
      
      isRead = true;
      this.loadingCtrl.dismiss();
      return fileContent;
    })
    .catch((error) => {
      isRead = false;
      this.loadingCtrl.dismiss();
      this.presentToast("Error Reading File! " + JSON.stringify(error));
      return emptyString;
    });
  }

  async writeFileContent(dirName: string, fileName: string, encryptedFile: any) {    
    let loading = await this.loadingCtrl.create({
      message: 'Writing file, please wait...'
    });
    await loading.present();
        
    return await this.file.writeFile(dirName, fileName, encryptedFile, {replace: true, append: false})
    .then(() => {
      loading.dismiss();
    })
    .catch((error) => {
      loading.dismiss();
      this.presentToast("Error Writing File! " + JSON.stringify(error));
    });
  }

  async encryptFileContent(fileContent: string): Promise<string> {
    let loading = await this.loadingCtrl.create({
      message: 'Encrypting file, please wait...'
    });
    await loading.present();

    // let encodingType = "data:application/pdf;base64,";
    // /*
    // * File reader provides us with an incorrectly encoded base64 string.
    // * So we have to fix it, in order to upload it correctly.
    // */
    // let mimeType = fileContent.split(',')[0]; // Remove the "data:application..." string.
    // let originalBase64 = fileContent.split(',')[1]; // Remove the "data:application..." string.
    // fileContent = encodingType + originalBase64; // Add the encodingType to the string.
    
    fileContent = CryptoJS.AES.encrypt(fileContent, ":<>?{}|[]\!@#$%^&*()_+").toString();

    loading.dismiss();
    return fileContent;
  }

  async decryptFileContent(encryptedFile: string): Promise<string> {
    let loading = await this.loadingCtrl.create({
      message: 'Decrypting file, please wait...'
    });
    await loading.present();
    
    let fileContent = CryptoJS.AES.decrypt(encryptedFile, ":<>?{}|[]\!@#$%^&*()_+").toString(CryptoJS.enc.Utf8);

    loading.dismiss();
    return fileContent;
  }

  async removeTempFile(fileName: string): Promise<any> {
    let loading = await this.loadingCtrl.create({
      message: 'Removing file, please wait...'
    });
    await loading.present();

    // return this.file.removeFile(this.dirNameTemp, this.fileNameTemp)
    return this.file.removeFile(this.dirName, fileName)
    .then(() => {
      loading.dismiss();
    })
    .catch(() => {
      loading.dismiss();
      this.presentToast("Error Removing File or Temp File No Longer Exist!");
    });
  }

  public zoom(value: number) {
    this.zoomType = 'custom';
    this.zoomValue = parseFloat((this.zoomValue + value).toFixed(2));
  }

  public stepFromPage(value: number) {
    this.page += value;
  }

  public onLoadComplete(data: PDFDocumentProxy) {
    this.totalPages = data.numPages;
  }

  async presentToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async presentAlert(header, message, ) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [{
          text: 'OK',
          handler: () => {}
        }]
    });

    await alert.present();
  }

  enterChatRooms() {
    if (this.actionType == 1) {
      // Navigate to create chatroom if room does not exist
      this.router.navigate(['createroom']);
    }
    else
    {
      // Navigate to chatrooms if room does exist
      this.router.navigate(['chatrooms']);
    }
  }

  enterChatRoom() {
    // Navigate to chatrooms if room does exist
    this.router.navigate(['chatroom']);
  }

  ngOnDestroy() {}

  async getFavoriteCourses() {
    // Get all favourite courses from the storage
    await this.nativeStorage.getItem('favoritecourse')
    .then((courses: Course[]) => {
      if (courses.length > 0) {
        this.courses = courses;
        
        this.courses.forEach(course => {
          if (course.id === this.courseID) {
            this.actionFavType = "Remov";
          }
        });
      }
    })
    .catch(() => {
      this.presentToast("Course favorite list is empty!");
    });
  }

  async actionFavoriteCourses(actionType: string) {

    let loading = await this.loadingCtrl.create({
      message: actionType + 'ing course to favorite, please wait...'
    });
    await loading.present();
    
    let currentCourse = new Course;
    currentCourse.id = this.courseID;
    currentCourse.code = this.courseCode;
    currentCourse.title = this.courseTitle;
    
    this.courseLists = [];
    if (this.courses !== undefined) {
      this.courses.forEach(course => {
        if (course.id !== this.courseID) {
          this.courseLists.push(course);
        }
      });
    }

    if (actionType === "Add") {
      this.courseLists.push(currentCourse);
      this.actionFavType = "Remov";
    }
    else if (actionType === "Remov")
    {
      this.actionFavType = "Add";
    }
    
    await this.nativeStorage.setItem('favoritecourse', this.courseLists)
    .then(() => {
      this.presentAlert("Info", "Course " + actionType + 'ed' + " Successfully!");
      this.getFavoriteCourses();
    })
    .catch(() => {
      this.presentToast("Error adding course to favorite list");
    });

    loading.dismiss();
  }
}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};
