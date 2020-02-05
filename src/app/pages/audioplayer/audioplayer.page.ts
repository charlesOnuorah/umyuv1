/**
 * Ionic 4 Spotify app starter - Ion Spotify (https://store.enappd.com/product/ionic-4-spotify-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController, Platform, AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import * as firebase from 'Firebase';
import * as CryptoJS from 'crypto-js';
import { Course } from 'src/app/models';

@Component({
  selector: 'app-audioplayer',
  templateUrl: './audioplayer.page.html',
  styleUrls: ['./audioplayer.page.scss'],
})
export class AudioPlayerPage implements OnInit {
  image: string = 'assets/imgs/album_art2.gif';
  play_the_track: string;
  
  courseID: number;
  courses: Course[];
  courseCode: string;
  courseTitle: string;
  fileName: string;
  fileNameTemp: string;
  dirName: string;
  systemBase: string;
  dirBase: string = "/.UMYU/.data/.materials/";
  downloadURL: string = "http://umyu.easystudy.com.ng/materials/";
  isFound: boolean = false;
  courseLists: Array<Course> = [];
  actionFavType: string = "Add";
  count: number = 0;
  totalFiles: number;
  
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
    
    if(this.platform.is('android')) {
      this.systemBase =  this.file.externalRootDirectory + "/Documents";
    } else if(this.platform.is('ios')) {
      this.systemBase =  this.file.documentsDirectory + "/Documents";
    } else if(this.platform.is('desktop')) {
      this.systemBase =  this.file.dataDirectory;
    } else if(this.platform.is('tablet')) {
      this.systemBase =  this.file.dataDirectory;
    } else {
      this.systemBase =  this.file.dataDirectory;
    }    
    
    this.fileNameTemp = "audiofiletemp" + this.courseID + ".mp3";

    this.fileName = "audiofile" + this.courseID + ".mp3";
    this.dirName = this.systemBase + this.dirBase + ".audios/";

    this.downloadURL = this.downloadURL + "audio/" + this.fileName;
      
		this.platform.ready().then(() => {
      this.verifyMedia().then(() => {});
    });
  }  

  async verifyMedia() {

    let loading = await this.loadingCtrl.create({
      message: 'Checking file on local storage, please wait...'
    });
    await loading.present();

    // This is where the media file will be stored, you can change it as you like
    this.file.checkFile(this.dirName, this.fileName)
    .then(() => {
      loading.dismiss();
      
      // Play downloaded audio
      this.playMediaFile();
    })
    .catch(() => {
      loading.dismiss();
      this.downloadMedia();
    });
  }

  async downloadMedia() {

    let isDownloaded = false;
    
    // Initialize transfer handle
    const transfer = this.fileTransfer.create();

    await this.loadingCtrl.create({
      message: 'Downloading 1 of 1 file, please wait...'
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

  async playMediaFile() {
    // Get media URL and convert to an accessible path
    
    let loading = await this.loadingCtrl.create({
      message: 'Reading file, please wait...'
    });
    await loading.present();

    return await this.file.readAsText(this.dirName, this.fileName)
    .then((fileContent: string) => {            
      this.decryptFileContent(fileContent)
      .then((fileContent) => {
        var audio = document.getElementsByTagName('audio')[0];
        var sources = audio.getElementsByTagName('source');
        sources[0].src = fileContent;
        audio.load();
        loading.dismiss();
      })
      .catch(() => {});     
    })
    .catch((error) => {
      loading.dismiss();
      this.presentToast("Error Reading File! " + JSON.stringify(error));
    });
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
                this.playMediaFile();
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

  async writeFileContent(dirName: string, fileName: string, encryptedFile: string) {    
    let loading = await this.loadingCtrl.create({
      message: 'Writing file, please wait...'
    });
    await loading.present();
        
    // let blob = this.convertBase64ToBlob(originalBase64, contentType)
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

    return this.file.removeFile(this.dirName, fileName)
    .then(() => {
      loading.dismiss();
    })
    .catch(() => {
      loading.dismiss();
      this.presentToast("Error Removing File or Temp File No Longer Exist!");
    });
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

  async verifyMediaDownload() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'This action will download all course contents in MP3 format to your drive, this action may take some time depending on your internet download speed. Proceed?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {}
        }, {
          text: 'Okay',
          handler: async () => {
            await this.prepareMediaDownload();
          }
        }
      ]
    });

    await alert.present();
  }

  async prepareMediaDownload(): Promise<void> {

    this.courses = JSON.parse(localStorage.getItem('course'));
    this.totalFiles = this.courses.length;
    
    this.dirName = this.systemBase + this.dirBase + ".audios/";

    // for (let i = 0; i < this.totalFiles; i++) {
    for (const course of this.courses) {
      this.fileNameTemp = "audiofiletemp" + course.id + ".mp3";
      this.fileName = "audiofile" + course.id + ".mp3";
      this.downloadURL = "http://umyu.easystudy.com.ng/materials/audio/" + this.fileName;

      // await is converting Promise<number> into number
      const count:number = await this.startMediaDownload(course.id);
      // console.log(count);
    }

    // Send success notification to user
    this.presentToast("Process completed!");
  }

  startMediaDownload(count: number): Promise<number> {

    let isDownloaded = false;

    // Initialize transfer handle
    const transfer = this.fileTransfer.create();    

    return new Promise<number>(resolve => {
      this.loadingCtrl.create({
        message: "Processing " + count + " of " + this.totalFiles + " file(s), please wait..."
      }).then((res) => {
        res.present();
        res.onDidDismiss().then((dis) => {});

        setTimeout(() => {
          if (isDownloaded === false) {
            // Abort active transfer:
            transfer.abort();          
    
            // Remove incomplete downloaded file
            this.file.removeFile(this.dirName, '~' + this.fileNameTemp)
            .then(() => {
              this.loadingCtrl.dismiss();
              resolve(count);
            })
            .catch((error) => {
              this.loadingCtrl.dismiss();
              this.presentToast("Error removing file: " + '~' + this.fileNameTemp + " Error: " + JSON.stringify(error));
            });
        
            // Send failure notification to user
            this.presentToast("File download timed out for file " + this.fileNameTemp);
          }
        }, 60000);
      });    

      // transfer.onProgress((progressEvent) => {
      //   var counter = Math.floor(progressEvent.loaded / progressEvent.total * 100);
      // });

      // Verify if selected file for download already exist on the device
      this.file.checkFile(this.dirName, this.fileName)
      .then(() => {

        isDownloaded = true;
        this.loadingCtrl.dismiss();

        resolve(count);
      })
      .catch(() => {
        // Start the dowload for the selected file
        transfer.download(this.downloadURL, this.dirName + this.fileNameTemp)
        .then(async () => {
          isDownloaded = true;
          // this.loadingCtrl.dismiss(); // Don't delete yet

          // Process downloaded media
          // const count1:number = await this.processMedia(count);

          // Start reading the selected file content for encryption
          this.file.readAsDataURL(this.dirName, this.fileNameTemp)
          .then((fileContent: string) => {
            const encFileContent = CryptoJS.AES.encrypt(fileContent, ":<>?{}|[]\!@#$%^&*()_+").toString();

            this.file.writeFile(this.dirName, this.fileName, encFileContent, {replace: true, append: false})
            .then(() => {

              this.file.removeFile(this.dirName, this.fileNameTemp)
              .then(() => {
                this.loadingCtrl.dismiss();
                resolve(count);
              })
              .catch((error) => {
                this.loadingCtrl.dismiss();
                this.presentToast("Error removing file: " + this.fileNameTemp + " Error: " + JSON.stringify(error));
              });

            })
            .catch((error) => {
              this.loadingCtrl.dismiss();
              this.presentToast("Error writing file: " + this.fileName + " Error: " + JSON.stringify(error));
            });
            
          })
          .catch((error) => {
            this.loadingCtrl.dismiss();
            this.presentToast("Error reading file: " + this.fileNameTemp + " Error: " + JSON.stringify(error));
          });

        })
        .catch((error) => {
          isDownloaded = false;
          this.loadingCtrl.dismiss();
    
          // Send failure notification to user
          this.presentToast("File download failed for file: " + this.fileNameTemp + " Error: " + JSON.stringify(error));
          resolve(count);
        });        
      });
    });
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