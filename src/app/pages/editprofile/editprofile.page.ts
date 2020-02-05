import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController, AlertController, LoadingController, Platform } from '@ionic/angular';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  profileForm: FormGroup;

  user = {firstName: '', lastName: '', email: '', phoneNumber: ''}
  constructor(
      private formBuilder: FormBuilder,
      private nativeStorage: NativeStorage,
      private loadingCtrl: LoadingController,
      public toastController: ToastController,
      public alertController: AlertController,
      private platform: Platform) {
          this.profileForm = new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl(),
            email: new FormControl(),
            phoneNumber: new FormControl()
          });
       }

  ngOnInit() {
    // this.presentAlert()
    this.nativeStorage.getItem('usercredentials').then(User => {
      this.user.firstName = User.username ? User.username.split(' ')[0] : '';
      this.user.lastName = User.username ? User.username.split(' ')[1] ? 
        User.username.split(' ')[1] : '' : '';
      this.user.email = User.email;
      this.user.phoneNumber = User.phoneNumber;
    });
   // const s = JSON.parse(localStorage.getItem('user'));
    // console.log('s', s, this.user)

    // this.user.firstName = s ? s.firstName : '';
    // this.user.lastName = s ? s.lastName : '';
    // this.user.email = s ? s.email : '';
    // this.user.phoneNumber = s ? s.phoneNumber : '';

    // this.profileForm = this.formBuilder.group({
    //   'firstName': ['', [Validators.required]],
    //   'lastName': ['', [Validators.required]]
    // })
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'here in here',
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
          }
        }
      ]
    });

    await alert.present();
  }
  onSubmit(profileForm){
   // console.log("profile form", profileForm)
    if(this.platform.is('android')) {
      this.submitStandardHttp(profileForm);
    } else if(this.platform.is('ios')) {
      this.submitStandardHttp(profileForm);
    } else if(this.platform.is('desktop')) {
      this.submitStandardHttp(profileForm);
    } else if(this.platform.is('tablet')) {
      this.submitStandardHttp(profileForm);
    } else {
      this.submitStandardHttp(profileForm);
    }
  }

  async submitStandardHttp(profileForm) {

    this.user.firstName = profileForm.firstName;
    this.user.lastName = profileForm.lastName;
    this.user.phoneNumber = profileForm.phoneNumber;
    this.user.email = profileForm.email;
    //usercredentials
    try {
      await this.nativeStorage.setItem('usercredentials', {User:
          {username: `${this.user.firstName} ${this.user.lastName}`,
            firstName: `${this.user.firstName}`,
            lastName: `${this.user.lastName}`,
            email: `${this.user.email}`,
            phoneNumber: `${this.user.phoneNumber}`
        }});
     // localStorage.setItem('user', JSON.stringify({...this.user, username: `${this.user.firstName} ${this.user.lastName}`}))
      
      const alert = await this.alertController.create({
        header: 'Okay!',
        message: 'Profile Updated successfully',
        buttons: [
           {
            text: 'Okay',
            handler: () => {
            }
          }
        ]
      });
      await alert.present();
    } catch (err){
      const toast = await this.toastController.create({
        message: 'Error Updating Profile',
        duration: 2000,
        position: 'top'
      });
      toast.present();
    }
  }


}
