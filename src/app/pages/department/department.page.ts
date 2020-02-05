import { Department } from '../../models'
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform, LoadingController, AlertController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-department',
  templateUrl: './department.page.html',
  styleUrls: ['./department.page.scss'],
})
export class DepartmentPage implements OnInit {
 
  departments: any; 
  facultyid: number;
 
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
        this.facultyid = id;
      }
    );
 
    // Get the course departments from the API
    this.nativeStorage.getItem('department').then(
      department => {
        // this.presentAlert("Info", "Setup department list retrieved!" + JSON.parse(department.Department));
        this.departments = JSON.parse(department.Department);
        this.departments = this.getFilterByFacultyID(this.departments);
       },
      () => {
        this.getDepartments();
      }
    );

    if (this.departments === null) {
      this.getDepartments();
    }
  }
 
  getDepartments() {
    if(this.platform.is('android')) {
      this.getDepartmentNativeHttp();
    } else if(this.platform.is('ios')) {
      this.getDepartmentNativeHttp();
    } else if(this.platform.is('desktop')) {
      this.getDepartmentStandard();
    } else if(this.platform.is('tablet')) {
      this.getDepartmentStandard();
    } else {
      this.getDepartmentStandard();
    }
  }  

  async getDepartmentStandard() {
    
    let loading = await this.loadingCtrl.create({
      message: 'Loading departments, please wait...'
    });
    await loading.present();

    let _httpHeaders = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .set('Cache-Control', 'no-cache');

    let httpHeaders = {
      headers: _httpHeaders
    }; 
 
    this.http.get('http://umyu.easystudy.com.ng/api/v1/api/v1/course/department', httpHeaders).pipe(
      finalize(() => loading.dismiss())
    ).subscribe(data => {
      this.departments = data['Departments'];
      this.setupDepartments();
      this.departments = this.getFilterByFacultyID(this.departments);
    }, error => {
      this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
    });
  }  
 
  async getDepartmentNativeHttp() {

    let loading = await this.loadingCtrl.create({
      message: 'Loading departments, please wait...'
    });
    await loading.present();
 
    // Returns a promise, need to convert with of() to Observable (if want)!
    from(this.nativeHttp.get('http://umyu.easystudy.com.ng/api/v1/api/v1/course/department', {}, {'Content-Type': 'application/json'})).pipe(
      finalize(() => loading.dismiss())
    ).subscribe(data => {
      let parsed = JSON.parse(data.data);
      this.departments = parsed.Departments;
      this.setupDepartments();
      this.departments = this.getFilterByFacultyID(this.departments);
    }, error => {
      this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
    });
  }
  
  getFilterByFacultyID(departments: Department[]): Department[] {
    let departmentList: Department[] = [];
    departments.forEach(department => {
      if (department.facultys_id === this.facultyid) {
        departmentList.push(department);
      }
    });

    // New faculty selected, retrieve department 
    // matching faculty from online server
    if (departmentList === null) {
      this.getDepartments();
    }

    return departmentList;
  }  

  refreshDepartment() {
    this.getDepartments();
  }

  setupDepartments() {
    this.nativeStorage.setItem('department', {Department: JSON.stringify(this.departments)}).then(
      () => {},
      () => {}
    );
  }

  setupDepartmentID(departmentID: number) {
    this.nativeStorage.setItem('departmentid', {DepartmentID: departmentID}).then(
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
