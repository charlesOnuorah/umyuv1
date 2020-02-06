import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, AlertController, LoadingController, Platform } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { from } from 'rxjs';
import { finalize } from 'rxjs/operators';
import * as firebase from "firebase";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { db } from "../../database";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  user = { username:'', password:'' };
  users = [];
  isFound: boolean = false;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private router: Router,
    private nativeStorage: NativeStorage,
    public toastController: ToastController,
    public alertController: AlertController,
    private nativeHttp: HTTP,
    private platform: Platform) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'username': ['', [Validators.required, Validators.maxLength(11)]],
      'password': ['', [Validators.required, Validators.minLength(6)]]
    });
  }
 
  onSubmit(registerForm) {    
    if(this.platform.is('android')) {
      this.submitNativeHttp(registerForm);
    } else if(this.platform.is('ios')) {
      this.submitNativeHttp(registerForm);
    } else if(this.platform.is('desktop')) {
      this.submitStandardHttp(registerForm);
    } else if(this.platform.is('tablet')) {
      this.submitStandardHttp(registerForm);
    } else {
      this.submitStandardHttp(registerForm);
    }
  }

  async submitStandardHttp(registerForm) {
    
    let loading = await this.loadingCtrl.create({
      message: 'Login in progress, please wait...'
    });
    await loading.present();

    this.user.username = registerForm.username;
    this.user.password = registerForm.password;

    let userCredentials = {
      "username": this.user.username,
      "pin": this.user.password
    }

    let _httpHeaders = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .set('Cache-Control', 'no-cache');

    let httpHeaders = {
      headers: _httpHeaders
    };
 
    this.http.post('http://umyu.easystudy.com.ng/api/v1/api/v1/user/activate', userCredentials, httpHeaders).pipe(
      finalize(() => loading.dismiss())
    )
    .subscribe(data => {
      loading.dismiss();            
      
      if (data['status'] === 200) {
        this.nativeStorage.setItem('usercredentials', {User: userCredentials}).then(
          () => {           
            
          },
          error => {
            this.presentAlert("Error!", "Error storing user credentials" + JSON.stringify(error));
          }
        );
        this.router.navigate(['home']);
      }
      else
      {
        this.presentAlert("Warning!", "Invalid Username or Password! Please try again...");
      }
    }, error => {
      this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
    });
  }

  async submitNativeHttp(registerForm) {
    
    let loading = await this.loadingCtrl.create({
      message: 'Login in progress, please wait...'
    });
    await loading.present();

    this.user.username = registerForm.username;
    this.user.password = registerForm.password;

    let userCredentials = {
      "username": this.user.username,
      "pin": this.user.password
    }
 
    // Returns a promise, need to convert with of() to Observable (if want)!
    from(this.nativeHttp.post('http://umyu.easystudy.com.ng/api/v1/api/v1/user/activate', userCredentials, {'Content-Type': 'application/json'})).pipe(
      finalize(() => loading.dismiss())
    ).subscribe(data => {
      let parsed = JSON.parse(data.data);

      loading.dismiss();
      
      if (parsed.status === 200) {
        this.nativeStorage.setItem('usercredentials', {User: userCredentials}).then(
          () => {
            
          },
          error => {
            this.presentAlert("Error!", "Error storing user credentials: " + JSON.stringify(error));
          }
        );
        this.router.navigate(['home']);
      }
      else
      {
        this.presentAlert("Warning!", "Invalid Username or Password! Please try again...");
      }
    }, error => {
      this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
    });    
  }

  // async onSubmit(registerForm) {    
  //   let loading = await this.loadingCtrl.create({
  //     message: 'Registration in progress, please wait...'
  //   });
  //   await loading.present();

  //   this.user.username = registerForm.username;
  //   this.user.password = registerForm.password;
  //   firebase.database().ref('users').on('value', resp => {
  //     this.users = [];
  //     this.users = snapshotToArray(resp);
  //     if (this.users === undefined || this.users.length == 0) {        
  //       this.saveUserToFirebase();
  //     }
  //     else
  //     {
  //       for (let user of this.users) {
  //         if (user.username === this.user.username) {
  //           this.presentAlert("Warning!", "Username (" + this.user.username + ") already exisit! Please choose another name!");
  //           this.isFound = true;
  //           break;
  //         }
  //       }
        
  //       if (this.isFound === false) {
  //         this.saveUserToFirebase();
  //         loading.dismiss();
  //       }

  //       // this.users.forEach(user => {
  //       //   if (user.username == this.user.username) {
  //       //     this.presentAlert("Warning!", "Username (" + this.user.username + ") already exisit! Please choose another name!");
  //       //   }
  //       //   else
  //       //   {
  //       //     this.saveUserToFirebase();
  //       //   }
  //       // });
  //     }
  //   });    
  // }

  async saveUserToFirebase() {
    const db = firebase.firestore()
  
    db.collection('users').add({
      username:this.user.username,
      password:this.user.password,
      created:Date()
    })
    // let newData = firebase.database().ref('users').push();
    // newData.set({
    //   username:this.user.username,
    //   password:this.user.password,
    //   created:Date()
    // });
    
    this.nativeStorage.setItem('credentials', {User: this.user}).then(
      () => {},
      (error) => {}
    );
    this.router.navigate(['home']);
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top'
    });
    toast.present();
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

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};