import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform, LoadingController, AlertController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-level',
  templateUrl: './level.page.html',
  styleUrls: ['./level.page.scss'],
})
export class LevelPage implements OnInit {
 
  levels: any; 
  departmentid: number;
 
  /**
   * Constructor of our course faculty page
   * @param activatedRoute Information about the route we are on
   * @param courseDepartmentService The course department Service to get data
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private nativeHttp: HTTP,
    private nativeStorage: NativeStorage,
    private alertController: AlertController) {
  }
 
  ngOnInit() {
    // Get the ID that was passed with the URL    
    this.activatedRoute.params.subscribe(
      params => {
          const id = +params['id'];
          this.departmentid = id;
      }
    );
 
    // Get the course levels from the API
    this.nativeStorage.getItem('level').then(
      level => {
        this.levels = JSON.parse(level.Level);
       },
      () => {
        this.getLevels();
      }
    );

    if (this.levels === null) {
      this.getLevels();
    }
  }
 
  getLevels() {    
    if(this.platform.is('android')) {
      this.getLevelNativeHttp();
    } else if(this.platform.is('ios')) {
      this.getLevelNativeHttp();
    } else if(this.platform.is('desktop')) {
      this.getLevelStandard();
    } else if(this.platform.is('tablet')) {
      this.getLevelStandard();
    } else {
      this.getLevelStandard();
    }
  }  

  async getLevelStandard() {
    
    let loading = await this.loadingCtrl.create({
      message: 'Loading levels, please wait...'
    });
    await loading.present();

    let _httpHeaders = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .set('Cache-Control', 'no-cache');

    let httpHeaders = {
      headers: _httpHeaders
    };
 
    this.http.get('http://umyu.easystudy.com.ng/api/v1/api/v1/course/level', httpHeaders).pipe(
      finalize(() => loading.dismiss())
    )
    .subscribe(data => {
      this.levels = data['Levels'];
      this.setupLevels();
    }, error => {
      this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
    });
  }  
 
  async getLevelNativeHttp() {

    let loading = await this.loadingCtrl.create({
      message: 'Loading levels, please wait...'
    });
    await loading.present();
 
    // Returns a promise, need to convert with of() to Observable (if want)!
    from(this.nativeHttp.get('http://umyu.easystudy.com.ng/api/v1/api/v1/course/level', {}, {'Content-Type': 'application/json'})).pipe(
      finalize(() => loading.dismiss())
    ).subscribe(data => {
      let parsed = JSON.parse(data.data);
      this.levels = parsed.Levels;
      this.setupLevels();
    }, error => {
      this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
    });
  }

  refreshLevel() {          
    this.getLevels();
  }

  setupLevels() {          
    this.nativeStorage.setItem('level', {Level: JSON.stringify(this.levels)}).then(
    );
  }

  setupLevelID(levelID: number) {
    this.nativeStorage.setItem('levelid', {LevelID: levelID}).then(
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
