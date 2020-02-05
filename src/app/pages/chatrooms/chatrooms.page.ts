import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-chatrooms',
  templateUrl: './chatrooms.page.html',
  styleUrls: ['./chatrooms.page.scss'],
})
export class ChatRoomsPage implements OnInit {
  rooms = [];
  ref = firebase.database().ref('chatrooms/');
  username: string;

  constructor(private router: Router, private nativeStorage: NativeStorage) {
    this.ref.on('value', resp => {
      this.rooms = [];
      this.rooms = snapshotToArray(resp);
    });
  }

  ngOnInit() {
    // Get user credentials if user has already login
    this.nativeStorage.getItem('usercredentials').then(
      usercredentials => {
        this.username = usercredentials.User.username;
        if (this.username === undefined || this.username.length == 0) {
          this.router.navigate(['register']);
        }
       },
      error => {
        // this.router.navigateByUrl('/register');
      }
    );
  }

  joinRoom(key, roomname) {
    this.nativeStorage.setItem('chatinfo', {Key: key, RoomName: roomname, UserName: this.username}).then(
      () => {},
      () => {}
    );

    // Navigate and display chatroom
    this.router.navigate(['/chatroom']);
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
