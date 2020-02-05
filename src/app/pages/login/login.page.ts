import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, AlertController, LoadingController, Platform } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import * as firebase from 'Firebase';
import { from } from 'rxjs';
import { User } from 'src/app/models';
import { finalize } from 'rxjs/operators';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  user = { username:'', password:'' };
  users = [];
  isFound: boolean = false;

  objectResponse: any;

  constructor(
    private http: HttpClient,
    private platform: Platform, 
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private nativeStorage: NativeStorage,
    private router: Router, private nativeHttp: HTTP,
    public toastController: ToastController,
    public alertController: AlertController) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username': ['', [Validators.required, Validators.maxLength(11)]],
      'password': ['', [Validators.required, Validators.minLength(6)]]
    });
  }
 
  onSubmit(loginForm) {
    // if (this.platform.is('cordova')) {
    //   this.submitNativeHttp(loginForm);
    // } else {
    //   this.submitStandardHttp(loginForm);
    // }
    
    if(this.platform.is('android')) {
      this.submitNativeHttp(loginForm);
    } else if(this.platform.is('ios')) {
      this.submitNativeHttp(loginForm);
    } else if(this.platform.is('desktop')) {
      this.submitStandardHttp(loginForm);
    } else if(this.platform.is('tablet')) {
      this.submitStandardHttp(loginForm);
    } else {
      this.submitStandardHttp(loginForm);
    }
  }

  async submitStandardHttp(loginForm) {
    
    let loading = await this.loadingCtrl.create({
      message: 'Login in progress, please wait...'
    });
    await loading.present();

    this.user.username = loginForm.username;
    this.user.password = loginForm.password;

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
          () => {},
          () => {}
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

  async submitNativeHttp(loginForm) {
    
    let loading = await this.loadingCtrl.create({
      message: 'Login in progress, please wait...'
    });
    await loading.present();

    this.user.username = loginForm.username;
    this.user.password = loginForm.password;

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
          () => {},
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

  register() {
    this.router.navigate(['register']);
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
          handler: () => {}
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