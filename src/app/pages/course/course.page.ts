import { Course } from '../../models'
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform, LoadingController, AlertController, ToastController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit { 
  courses: Course[];
  levelid: number;
  departmentid: number;
  courseCode: string;
  courseTitle: string;
  isFound: boolean = false;
  
  fileName: string;
  fileNameTemp: string;
  dirName: string;
  systemBase: string;
  dirBase: string = "/.UMYU/.data/.materials/";
  downloadURL: string = "http://umyu.easystudy.com.ng/materials/";
 
  /**
   * Constructor of our course faculty page
   * @param activatedRoute Information about the route we are on
   * @param courseCodeService The course code Service to get data
   */
  constructor(
    private http: HttpClient,
    private nativeHttp: HTTP,
    private platform: Platform,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private nativeStorage: NativeStorage,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController) {
  }
 
  ngOnInit() {
    // Get the ID that was passed with the URL    
    this.activatedRoute.params.subscribe(
      params => {          
        this.levelid = +params['levelid'];
        this.departmentid = +params['departmentid'];
      }
    );
  
    // // Get the courses from the API
    // this.nativeStorage.getItem('course').then(
    //   course => {
    //     this.presentAlert("Info", "Setup course list retrieved!" + JSON.parse(course.Course));
    //     this.courses = JSON.parse(course.Course);
    //     this.courses = this.getFilterByDepartmentLevelID(this.courses);
    //    },
    //   () => {
    //     this.getCourses();
    //   }
    // ).catch((error) => {
    //   // Send failure notification to user
    //   this.presentToast("Unable to retrieve course list!");
    // });
 
    // Get the courses from the API    
    this.courses = JSON.parse(localStorage.getItem('course'));

    if (this.courses === null) {
      this.isFound = false;
      this.getCourses();
    }
    else {
      this.isFound = true;
      this.courses = this.getFilterByDepartmentLevelID(this.courses);
    }
  }
 
  getCourses() {
    if(this.platform.is('android')) {
      this.getCourseNativeHttp();
    } else if(this.platform.is('ios')) {
      this.getCourseNativeHttp();
    } else if(this.platform.is('desktop')) {
      this.getCourseStandard();
    } else if(this.platform.is('tablet')) {
      this.getCourseStandard();
    } else {
      this.getCourseStandard();
    }
  }

  async getCourseStandard() {

    let loading = await this.loadingCtrl.create({
      message: 'Loading courses, please wait...'
    });
    await loading.present();

    let _httpHeaders = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .set('Cache-Control', 'no-cache');

    let httpHeaders = {
      headers: _httpHeaders
    };
 
    this.http.get('http://umyu.easystudy.com.ng/api/v1/api/v1/course/code', httpHeaders).pipe(
      finalize(() => loading.dismiss())
    ).subscribe(data => {
      this.courses = data['Codes'];
      this.setupCourses();
      this.courses = this.getFilterByDepartmentLevelID(this.courses);
    }, error => {
      this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
    });
  }  
 
  async getCourseNativeHttp() {
    
    let loading = await this.loadingCtrl.create({
      message: 'Loading courses, please wait...'
    });
    await loading.present();
 
    // Returns a promise, need to convert with of() to Observable (if want)!
    from(this.nativeHttp.get('http://umyu.easystudy.com.ng/api/v1/api/v1/course/code', {}, {'Content-Type': 'application/json'})).pipe(
      finalize(() => loading.dismiss())
    ).subscribe(data => {
      let parsed = JSON.parse(data.data);
      this.courses = parsed.Codes;
      this.setupCourses();
      this.courses = this.getFilterByDepartmentLevelID(this.courses);
    }, error => {
      this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
    });
  }
  
  getFilterByDepartmentLevelID(courses: Course[]): Course[] { 
    let courseList: Course[] = [];
    courses.forEach(course => {
      if (course.department_id === this.departmentid && course.level_id === this.levelid) {
        courseList.push(course);
      }
    });
    
    // New department and level selected, retrieve course
    // matching department and level from online server
    if (courseList !== null) {
      this.isFound = true;
    }
    else
    {
      this.isFound = false;
    }

    return courseList;
  }

  refreshCourse() {
    this.getCourses();
  }

  setupCourses() {
    localStorage.setItem('course', JSON.stringify(this.courses));
  }

  setupSelectedCourse(course: Course) {
    this.nativeStorage.setItem('selectedcourse', {Code: course.code, Title: course.title}).then(
      () => {},
      () => {}
    );
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

}
