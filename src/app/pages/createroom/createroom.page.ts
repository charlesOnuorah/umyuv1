import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController, ToastController } from '@ionic/angular';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'Firebase';

@Component({
  selector: 'app-createroom',
  templateUrl: './createroom.page.html',
  styleUrls: ['./createroom.page.scss'],
})
export class CreateRoomPage implements OnInit {
  courseID: number;
  courseCode: string;
  courseTitle: string;

  rooms = [];
  ref = firebase.database().ref('chatrooms/');
 
  /**
   * Constructor of our course viewer page
   * @param activatedRoute Information about the route we are on
   * @param courseCodeService The course code Service to get data
   */
  constructor(public loadingCtrl: LoadingController, private activatedRoute: ActivatedRoute,
    private nativeStorage: NativeStorage, private router: Router,
    private toastCtrl: ToastController, private spinnerDialog: SpinnerDialog) {

    this.ref.on('value', resp => {
      this.rooms = [];
      this.rooms = snapshotToArray(resp);      
    });

    this.nativeStorage.getItem('selectedcourse').then(
      selectedCourse => {
        this.courseCode = selectedCourse.Code;
        this.courseTitle = selectedCourse.Title;
      },
      () => {}
    );
  }

  ngOnInit() {
    // Get the ID that was passed with the URL    
    this.activatedRoute.params.subscribe(
      params => {          
        this.courseID = +params['courseid'];
      }
    ); 
  }

  async createChatRoom() {
    let loading = await this.loadingCtrl.create({
      message: 'Creatiing chat room, please wait...'
    });
    await loading.present();
    
    let newData = this.ref.push();
    newData.set({
      // roomname:this.data.roomname
      roomname: this.courseCode,
      roomtitle: this.courseTitle
    });
    loading.dismiss();
                        
    // Navigate and display chatroom
    this.router.navigate(['/chatrooms/']);
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