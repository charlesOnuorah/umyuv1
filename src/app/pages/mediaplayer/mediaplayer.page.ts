import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController, Platform, AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { Course } from 'src/app/models';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { ThemeableBrowserObject, ThemeableBrowser, ThemeableBrowserOptions } from '@ionic-native/themeable-browser/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import * as firebase from 'Firebase';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.page.html',
  styleUrls: ['./mediaplayer.page.scss'],
})
export class MediaPlayerPage implements OnInit {
  courses: Course[];
  courseID: number;
  courseCode: string;
  courseTitle: string;
  fileName: string;
  dirName: string;
  mediaURL: string;
  mediaURLTemp: string;
  mediaType: number;
  mimeType: string;
  systemBase: string;
  dirBase: string = "/.UMYU/.data/.materials/";
  downloadURL: string = "http://umyu.easystudy.com.ng/materials/";
  isDownloaded: boolean = false;
  private iabRef;

  link: string;
  googledoclink: string;
  
  rooms = [];
  ref = firebase.database().ref('chatrooms/');
  createRoomCaption: string;
  actionType: number;

  // Can add options from the original InAppBrowser in a JavaScript object form (not string)
  // This options object also takes additional parameters introduced by the ThemeableBrowser plugin
  // This example only shows the additional parameters for ThemeableBrowser
  // Note that that `image` and `imagePressed` values refer to resources that are stored in your app

  options: ThemeableBrowserOptions = {
    statusbar: {
        color: '#011a01'
    },
    toolbar: {
        height: 50,
        color: '#011a01'
    },
    title: {
        color: '#ffffff',
        showPageTitle: true
    },
    backButton: {
        image: 'back',
        imagePressed: 'back_pressed',
        align: 'left',
        event: 'backPressed'
    },
    forwardButton: {
        image: 'forward',
        imagePressed: 'forward_pressed',
        align: 'left',
        event: 'forwardPressed'
    },
    closeButton: {
        image: 'close',
        imagePressed: 'close_pressed',
        align: 'left',
        event: 'closePressed'
    },
    customButtons: [
        {
            image: 'share',
            imagePressed: 'share_pressed',
            align: 'right',
            event: 'sharePressed'
        }
    ],
    menu: {
        image: 'menu',
        imagePressed: 'menu_pressed',
        title: 'Test',
        cancel: 'Cancel',
        align: 'right',
        items: [
            {
                event: 'helloPressed',
                label: 'Hello World!'
            },
            {
                event: 'testPressed',
                label: 'Test!'
            }
        ]
    },
    backButtonCanClose: true
  } 
 
  /**
   * Constructor of our course viewer page
   * @param activatedRoute Information about the route we are on
   * @param courseCodeService The course code Service to get data
   */
  constructor(
    public loadingCtrl: LoadingController,
    private platform: Platform,
    private router: Router,
    private fileTransfer: FileTransfer,
    private nativeStorage: NativeStorage,
    private activatedRoute: ActivatedRoute,
    private toastCtrl: ToastController,
    private fileOpener: FileOpener,
    private file: File,
    private spinnerDialog: SpinnerDialog,
    private themeableBrowser: ThemeableBrowser,
    private alertController: AlertController) {
    this.verifyMedia();
    this.nativeStorage.getItem('selectedcourse').then(
      selectedCourse => {
        this.courseCode = selectedCourse.Code;
        this.courseTitle = selectedCourse.Title;

        this.ref.on('value', resp => {
          this.rooms = [];
          this.rooms = snapshotToArray(resp);
          if (this.rooms === undefined || this.rooms.length == 0) {
            this.createRoomCaption = "Create Chat Room";
            this.actionType = 1;
          }
          else
          {
            this.rooms.forEach(room => {
              if (room.roomname == this.courseCode) {
                this.createRoomCaption = "Enter Chat Room";
                this.actionType = 2;
              }
              else
              {
                this.createRoomCaption = "Create Chat Room";
                this.actionType = 1;
              }
          });
          }
        }); 
      },
      () => {
        
      }
    );
  }

  ngOnInit() {
    // Get the ID that was passed with the URL    
    this.activatedRoute.params.subscribe(
      params => {          
        this.courseID = +params['courseid'];
        this.mediaType = +params['mediatype'];
      }
    ); 
 
    // Get the course resources from the API    
    // this.downloadURL = "https://www.youtube.com/embed/nckseQJ1Nlg";
    // this.downloadURL = "http://teacherguide.easystudy.com.ng/materials/video/M1V2_Eng.mp4";
    
    if(this.platform.is('android')) {
      this.systemBase =  this.file.externalRootDirectory + "/Documents";
    } else if(this.platform.is('ios')) {
      this.systemBase =  this.file.documentsDirectory + "/Documents";
    } else if(this.platform.is('desktop')) {
      // this.systemBase =  this.file.dataDirectory + "/local";
      this.systemBase =  this.file.dataDirectory;
      // this.presentAlert("Information!", "Running on windows platform " + this.systemBase);
    } else if(this.platform.is('tablet')) {
      this.systemBase =  this.file.dataDirectory;
    } else {
      this.systemBase =  this.file.dataDirectory;
    }
    
    if (this.mediaType == 1) {
      this.mimeType = "application/pdf";
      this.fileName = "pdffile" + this.courseID + ".pdf";
      this.dirName = this.systemBase + this.dirBase + ".pdfs/";
      this.downloadURL = this.downloadURL + "pdf/" + this.fileName;
    } else if (this.mediaType == 2) {
      this.mimeType = "audio/mpeg";
      this.fileName = "audiofile" + this.courseID + ".mp3";
      this.dirName = this.systemBase + this.dirBase + ".audios/";
      this.downloadURL = this.downloadURL + "audio/" + this.fileName;
    } else if (this.mediaType == 3) {
      this.mimeType = "video/mp4";
      this.fileName = "videofile" + this.courseID + ".mp4";
      this.dirName = this.systemBase + this.dirBase + ".videos/";
      this.downloadURL = this.downloadURL + "video/" + this.fileName;
    } else if (this.mediaType == 4) {
      this.mimeType = "application/vnd.ms-powerpoint";
      this.fileName = "powerpointfile" + this.courseID + ".ppt";
      this.dirName = this.systemBase + this.dirBase + ".powerpoints/";
      this.downloadURL = this.downloadURL + "powerpoint/" + this.fileName;
    }
  }

  async verifyMedia() {
    
    let loading = await this.loadingCtrl.create({
      message: 'Checking file on local storage, please wait...'
    });
    await loading.present();

    //This is where the media file will be stored, you can change it as you like
    this.file.checkFile(this.dirName, this.fileName).then((success) => {
      loading.dismiss();
      this.isDownloaded = true;
      
      // Get media URL and convert to an accessible path        
      this.mediaURLTemp = this.dirName + this.fileName;
      if (this.mediaType === 2 || this.mediaType === 3) {
        let win: any = window; // hack compilator
        this.mediaURL = win.Ionic.WebView.convertFileSrc(this.mediaURLTemp);
        this.playMediaFile();
      }

      if (this.mediaType === 1 || this.mediaType === 4) {          
        this.fileOpener.open(this.mediaURLTemp, this.mimeType)
        .then(() => {})
        .catch(error => {
          this.presentAlert("Error!", "Error opening file: " + JSON.stringify(error));
        });
      }
    })
    .catch(() => {
      loading.dismiss();
      this.downloadMedia();
    });
  }

  async downloadMedia() {

    let loading = await this.loadingCtrl.create({
      message: 'Downloading file, please wait...'
    });
    await loading.present();

    // Downloading File to Device
    const transfer = this.fileTransfer.create();
    transfer.download(this.downloadURL, this.dirName + this.fileName)
    .then(() => {
      loading.dismiss();

      // Send success notification to user
      this.presentToast("Download completed!");
      this.isDownloaded = true; 
      
      // Get media URL and convert to an accessible path        
      this.mediaURLTemp = this.dirName + this.fileName;
      if (this.mediaType === 2 || this.mediaType === 3) {
        let win: any = window; // hack compilator
        this.mediaURL = win.Ionic.WebView.convertFileSrc(this.mediaURLTemp);
        this.playMediaFile();
      }

      if (this.mediaType === 1 || this.mediaType === 4) {        
        this.fileOpener.open(this.mediaURLTemp, this.mimeType)
        .then(() => {})
        .catch(error => {
          this.presentAlert("Error!", "Error opening file: " + error);
        });
      }
    })
    .catch((error)=> {
      loading.dismiss();
      this.presentAlert("Error!", "Error downloading file: " + error);
    });
  }

  playMediaFile() {
    if (this.mediaType == 2) {
      var audio = document.getElementsByTagName('audio')[0];
      var sources = audio.getElementsByTagName('source');
      sources[0].src = this.mediaURL;
      audio.load();
    } else if (this.mediaType == 3) {
      var video = document.getElementsByTagName('video')[0];
      var sources = video.getElementsByTagName('source');
      sources[0].src = this.mediaURL;
      video.load();
    }    
  }

  addToFavorite() {

  }

  async presentToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async presentToastOptions(msg: string) {
    const toast = await this.toastCtrl.create({
      // header: 'Download Status',
      message: msg,
      position: 'bottom',
      buttons: [
        {
          side: 'end',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            this.addToFavorite()
          }
        }, {
          side: 'end',
          text: 'Done',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    toast.present();
  }

  openPDFFile() {
    let that = this;

    // this.iabRef = cordova.InAppBrowser.open("http://someurl.com", "_blank", "beforeload=yes,location=no");

    // const iabRef: ThemeableBrowserObject = this.themeableBrowser.create(this.googledoclink + this.link + this.fileName, '_blank', this.options);
    const iabRef: ThemeableBrowserObject = this.themeableBrowser.create("https://devdactic.com/html/5-simple-hacks-LBT.pdf", '_blank', this.options);
    //this.iabRef = cordova.InAppBrowser.open("https://devdactic.com/html/5-simple-hacks-LBT.pdf", "_blank", "beforeload=yes,location=no");

    // this.iabRef.addEventListener('beforeload', function(params, callback){
    //   // If the URL being loaded is a PDF
    //   if(params.url.match(".pdf")){
    //     that.openPDF(params.url);
    //   } else {
    //     callback(params.url);
    //   }
    // }, false);

    // this.iabRef.addEventListener('loadstart', function(params, callback){
    //   that.spinnerDialog.show(null, null, true);
    // });

    // this.iabRef.addEventListener('loadstop', function(params, callback){
    //   that.spinnerDialog.hide();
    // });

    // this.iabRef.addEventListener('exit', function(params, callback){
    //   //that.platform.exitApp();
    // });
  }

  openPDF(url: string) {
    let title = url.substring(
      url.lastIndexOf("/") + 1,
      url.lastIndexOf(".pdf")
    );

    let path =  this.file.externalDataDirectory;

    const transfer = this.fileTransfer.create();
    transfer.download(url, path + title + '.pdf').then(entry => {
      let url = entry.toURL();
      this.fileOpener.open(url, 'application/pdf');
    });
  }

  enterChatRoom() {
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

  async presentAlert(header, message, ) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [{
          text: 'OK',
          handler: () => {
            // this.router.navigate(['login']);
          }
        }]
    });

    await alert.present();
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
