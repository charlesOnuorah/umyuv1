import { Course } from '../../models'
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit { 
  courses: Course[];
  levelid: number;
  departmentid: number;
  courseCode: string;
  courseTitle: string;
  isFound: boolean = false;
 
  /**
   * Constructor of our favorite courses page
   * @param activatedRoute Information about the route we are on
   * @param courseCodeService The course code Service to get data
   */
  constructor(
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private nativeStorage: NativeStorage,
    private alertController: AlertController) {
  }
 
  ngOnInit() {
    // Get the favorite courses from the storage    
    this.getFavoriteCourses().then(() => {
      if (this.courses.length > 0) {
        this.isFound = true;
      }
      else {
        this.isFound = false;
      }
    });
  }

  async getFavoriteCourses(){

    let loading = await this.loadingCtrl.create({
      message: 'Retrieving favorite course(s), please wait...'
    });
    await loading.present();
    
    // Get all favourite courses from the storage
    await this.nativeStorage.getItem('favoritecourse')
    .then((courseLists: Course[]) => {
      if (courseLists.length > 0) {
        this.courses = courseLists;         
      }
    })
    .catch(() => {
      // this.presentAlert("Error", "Something went wrong");
    });
    
    loading.dismiss();
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
