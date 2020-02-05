import { Component, OnInit } from '@angular/core';
import { PopoverController, LoadingController, Platform, Events, AlertController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';

import { SettingComponent } from 'src/app/pages/setting/setting.component';

@Component({
  selector: 'page-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
 
  faculties: any;
  departments: any;
  levels: any;
  facultyID: number;
  departmentID: number;
  levelID: number;

  constructor(
    private popoverController: PopoverController,
    public loadingCtrl: LoadingController,
    private nativeStorage: NativeStorage,
    private router: Router,  
    private events: Events,
    private alertController: AlertController) {
    // this.platform.ready().then(() => {
    //   this.platform.backButton.subscribeWithPriority(9999, () => {
    //     document.addEventListener('backbutton', function (event) {
    //       event.preventDefault();
    //       event.stopPropagation();
    //     }, false);
    //   });
    // });
  }

  ngOnInit() {
  }

  async settingPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: SettingComponent,
      event: ev,
      translucent: true
    });

    /** Sync event from popover component */
    this.events.subscribe('fromPopoverEvent', () => {
      this.syncTasks();
    });
    
    return await popover.present();
  }

  syncTasks(){
    
  }

  async resetParameters() {
    let loading = await this.loadingCtrl.create({
      message: 'Resetting setup parameters, please wait...'
    });
    await loading.present();
    this.nativeStorage.remove('faculty');
    this.nativeStorage.remove('facultyid');
    this.nativeStorage.remove('department');
    this.nativeStorage.remove('departmentid');
    this.nativeStorage.remove('level');
    this.nativeStorage.remove('levelid');
    this.nativeStorage.remove('course');
    localStorage.removeItem('course');
    this.nativeStorage.remove('courseid');
    this.nativeStorage.remove('selectedcourse');
    this.nativeStorage.remove('chatinfo');
    this.nativeStorage.remove('favoritecourse');
    loading.dismiss();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'All default data will be removed from the device. Internet access will be required to retrieved data. Proceed?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.resetParameters();
          }
        }
      ]
    });

    await alert.present();
  }

  async navigateToEditProfilePage(){
    this.router.navigate(['/edit']);
  }

  verifySetup() {
    // Navigate to faculties
    
    this.router.navigate(['/faculties']);

    // Verify if faculties has been setup already
    // this.nativeStorage.getItem('faculty').then(
    //   faculty => {
        
    //     // Get the setup faculty id
    //     this.nativeStorage.getItem('facultyid').then(
    //       facultyid => {
    //         this.facultyID = facultyid.FacultyID;
            
    //         // Verify if departments has been setup already
    //         this.nativeStorage.getItem('department').then(
    //           department => {
    //             // Get the setup department id
    //             this.nativeStorage.getItem('departmentid').then(
    //               departmentid => {
    //                 this.departmentID = departmentid.DepartmentID;

    //                 // Verify if levels has been setup already
    //                 this.nativeStorage.getItem('level').then(
    //                   level => {
    //                     // Get the setup level id
    //                     this.nativeStorage.getItem('levelid').then(
    //                       levelid => {
    //                         this.levelID = levelid.LevelID;
                        
    //                         // Navigate and display courses
    //                         this.router.navigate(['/courses/'+this.departmentID+'/'+this.levelID]);
    //                       },
    //                       () => {
    //                         // Navigate and display levels
    //                         this.router.navigate(['/levels/'+this.departmentID]);
    //                       }
    //                     );
    //                   },
    //                   () => {
    //                     // Navigate and display levels
    //                     this.router.navigate(['/levels/'+this.departmentID]);
    //                   }
    //                 );
    //               },
    //               () => {
    //                 // Navigate and display departments
    //                 this.router.navigate(['/departments/'+this.facultyID]);
    //               }
    //             );                
    //           },
    //           () => {
    //             // Navigate and display departments
    //             this.router.navigate(['/departments/'+this.facultyID]);
    //           }
    //         );
    //       },
    //       () => {
    //         // Navigate and display faculties
    //         this.router.navigate(['/faculties']);
    //       }
    //     );
    //   },
    //   () => {
    //     // Navigate and display faculties
    //     this.router.navigate(['/faculties']);
    //   }
    // );
  }
}