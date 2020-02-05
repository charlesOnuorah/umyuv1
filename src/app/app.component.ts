import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { File } from '@ionic-native/file/ngx';
import { DirResponse } from './models';
import * as firebase from 'firebase';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';

const config = {
  apiKey: "AIzaSyCGavxScn2bJ_rSURja2qr4qLjk25E0Dfc",
  authDomain: "umyuchatid.firebaseapp.com",
  databaseURL: "https://umyuchatid.firebaseio.com",
  projectId: "umyuchatid",
  storageBucket: "umyuchatid.appspot.com",
  messagingSenderId: "91049745332",
  appId: "1:91049745332:web:961ef25a661f9b56d0f0e1",
  measurementId: "G-T64YNVKLDS",
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  systemBase: string;
  dirResponse: DirResponse;

  public appPages = [
    {
      title: 'Slider',
      url: '/slider',
      icon: 'code'
    },
    {
      title: 'Chatrooms',
      url: '/chatrooms',
      icon: 'chatboxes'
    },
    {
      title: 'Settings',
      url: '/setting',
      icon: 'settings'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private diagnostic: Diagnostic,
    private screenOrientation: ScreenOrientation,
    private file: File, private router: Router,
    private nativeStorage: NativeStorage,
    private alertController: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
      // check permission
      // this.getPermission();
      this.checkAuthentication()
      // set to portrait
      // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    });
    firebase.initializeApp(config);
  }

  getPermission() {
    if(this.platform.is('android')) {
      this.systemBase =  this.file.externalRootDirectory + "/Documents";
      this.diagnostic.getPermissionAuthorizationStatus(this.diagnostic.permission.READ_EXTERNAL_STORAGE).then((status) => {
        if (status != this.diagnostic.permissionStatus.GRANTED) {
          this.diagnostic.requestRuntimePermission(this.diagnostic.permission.READ_EXTERNAL_STORAGE).then((data) => {
            this.createDirectories();
          })
        } else {
          // Permission is goood, create default directory
          this.createDirectories();
        }
      }, (error) => {
        this.presentAlert("Error!", "Error requesting for permission " + error);
      });
    } else if(this.platform.is('ios')) {
      this.systemBase =  this.file.documentsDirectory + "/Documents";
      this.createDirectories();
    } else if(this.platform.is('desktop')) {
      this.systemBase =  this.file.dataDirectory;
      this.createDirectories();
    } else if(this.platform.is('tablet')) {
      this.systemBase =  this.file.dataDirectory;
      this.createDirectories();
    } else {
      this.systemBase =  this.file.dataDirectory;
      this.createDirectories();
    }
  }

  createDirectories() {
		this.platform.ready().then(() =>{
      this.createDirectory(this.systemBase, '.UMYU').then(resUMYU => {
        if (resUMYU.isDirectory == true) {
          this.createDirectory(resUMYU.nativeURL, '.data').then(resData => {
            if (resData.isDirectory == true) {
              this.createDirectory(resData.nativeURL, '.materials').then(resMaterial => {
                if (resMaterial.isDirectory == true) {
                  this.createDirectory(resMaterial.nativeURL, '.pdfs').then(resPDF => {
                    if (resPDF.isDirectory == true) {}
                  }).catch(errPDF => {
                    this.presentAlert("Error!", "Error creating PDF directory " + errPDF);
                  });
                  
                  this.createDirectory(resMaterial.nativeURL, '.audios').then(resAudio => {
                    if (resAudio.isDirectory == true) {}
                  }).catch(errAudio => {
                    this.presentAlert("Error!", "Error creating Audio directory " + errAudio);
                  });
                  
                  this.createDirectory(resMaterial.nativeURL, '.videos').then(resVideo => {
                    if (resVideo.isDirectory == true) {}
                  }).catch(errVideo => {
                    this.presentAlert("Error!", "Error creating Video directory " + errVideo);
                  });
                  
                  this.createDirectory(resMaterial.nativeURL, '.powerpoints').then(resPowerpoint => {
                    if (resPowerpoint.isDirectory == true) {}
                  }).catch(errPowerpoint => {
                    this.presentAlert("Error!", "Error creating Powerpoint directory " + errPowerpoint);
                  });

                  this.checkAuthentication();
                }
              }).catch(errMaterial => {
                this.presentAlert("Error!", "Error creating Materials directory " + errMaterial);
              });
            }            
          }).catch(errData => {
            this.presentAlert("Error!", "Error creating Data directory " + errData);
          });
          
          // this.createDirectory(resUMYU.nativeURL, '.temp').then(resTemp => {
          //   if (resTemp.isDirectory == true) {
          //     this.createDirectory(resTemp.nativeURL, '.videos').then(resVideo => {
          //       if (resVideo.isDirectory == true) {}
          //     }).catch(errVideo => {
          //       this.presentAlert("Error!", "Error creating Temp Video directory " + errVideo);
          //     });
          //   }
          // }).catch(errTemp => {
          //   this.presentAlert("Error!", "Error creating Temp directory " + errTemp);
          // });
        }
      }).catch(errUMYU => {
        this.presentAlert("Error!", "Error creating UMYU directory " + errUMYU);
      });
		});
  }
  
  createDirectory(nativeURL: string, newDirectory: string): Promise<DirResponse> {
    const dirResponse = new DirResponse();
    return this.file.checkDir(nativeURL, newDirectory).then(response => {
      dirResponse.isDirectory = true;
      dirResponse.nativeURL = nativeURL + "/" + newDirectory;
      return dirResponse;
    }).catch(err => {
      return this.file.createDir(nativeURL, newDirectory, true).then(response => {
        dirResponse.isDirectory = response.isDirectory;
        dirResponse.nativeURL = response.nativeURL;
        return dirResponse;
      }).catch(error => {
        dirResponse.isDirectory = false;
        dirResponse.nativeURL = nativeURL;
        return dirResponse;
      }); 
    });
  }

  checkAuthentication() {
    // Get user credentials if user has already login
    this.nativeStorage.getItem('usercredentials').then(
      usercredentials => {
        if (usercredentials.User.username === undefined || usercredentials.User.username.length == 0) {
          this.router.navigateByUrl('/home');
        }
        else{
          this.router.navigate(['slider']);
        }
       },
      error => {
        this.router.navigateByUrl('/home');
      }
    );
  }

  async presentAlert(header, message, ) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [{
          text: 'OK',
          handler: () => {
            
          }
        }]
    });
    await alert.present();
  }
}