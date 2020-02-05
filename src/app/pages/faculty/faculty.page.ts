import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform, LoadingController, AlertController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-faculty',
  templateUrl: 'faculty.page.html',
  styleUrls: ['faculty.page.scss'],
})
export class FacultyPage implements OnInit {
 
  faculties: any;
 
  /**
   * Constructor of our course faculty page
   * @param activatedRoute Information about the route we are on
   * @param courseFacultyService The course faculty Service to get data
   */
  constructor(
    private http: HttpClient,
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private nativeHttp: HTTP,
    private nativeStorage: NativeStorage,
    private alertController: AlertController) {
  }
 
  ngOnInit() {
    // Get the ID that was passed with the URL
    // let id = this.activatedRoute.snapshot.paramMap.get('id');
 
    // Get the course faculties from the API
    this.nativeStorage.getItem('faculty').then(
      faculty => {
        this.faculties = JSON.parse(faculty.Faculty);
       },
      () => {
        this.getFaculties();
      }
    );

    if (this.faculties === null) {
      this.getFaculties();
    }
  }
 
  getFaculties() {    
    if(this.platform.is('android')) {
      this.getFacultyNativeHttp();
    } else if(this.platform.is('ios')) {
      this.getFacultyNativeHttp();
    } else if(this.platform.is('desktop')) {
      this.getFacultyStandard();
    } else if(this.platform.is('tablet')) {
      this.getFacultyStandard();
    } else {
      this.getFacultyStandard();
    }
  }

  async getFacultyStandard() {
    
    let loading = await this.loadingCtrl.create({
      message: 'Loading faculties, please wait...'
    });
    await loading.present();

    let _httpHeaders = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .set('Cache-Control', 'no-cache');

    let httpHeaders = {
      headers: _httpHeaders
    }; 
 
    this.http.get('http://umyu.easystudy.com.ng/api/v1/api/v1/course/faculty', httpHeaders).pipe(
      finalize(() => loading.dismiss())
    ).subscribe(data => {
      this.faculties = data['Facultys'];
      this.setupFaculties();
    }, error => {
      this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
    });
  }
 
  async getFacultyNativeHttp() {

    let loading = await this.loadingCtrl.create({
      message: 'Loading faculties, please wait...'
    });
    await loading.present();
 
    // Returns a promise, need to convert with of() to Observable (if want)!
    from(this.nativeHttp.get('http://umyu.easystudy.com.ng/api/v1/api/v1/course/faculty', {}, {'Content-Type': 'application/json'})).pipe(
      finalize(() => loading.dismiss())
    ).subscribe(data => {
      let parsed = JSON.parse(data.data);
      this.faculties = parsed.Facultys;
      this.setupFaculties();
    }, error => {
      this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
    });
  }

  refreshFaculty() {          
    this.getFaculties();
  }

  setupFaculties() {          
    this.nativeStorage.setItem('faculty', {Faculty: JSON.stringify(this.faculties)}).then(
      () => {},
      () => {}
    );
  }

  setupFacultyID(facultyID: number) {
    this.nativeStorage.setItem('facultyid', {FacultyID: facultyID}).then(
      () => {},
      () => {}
    );
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
