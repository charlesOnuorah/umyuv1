import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import * as firebase from 'Firebase';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.page.html',
  styleUrls: ['./chatroom.page.scss'],
})
export class ChatRoomPage implements OnInit {

  @ViewChild(IonContent, {static: false}) content: IonContent;

  data = { type:'', username:'', message:'' };
  chats = [];
  roomkey:string;
  username: string;
  userInput: string;
  offStatus:boolean = false;
  isEnabled:boolean = false;
  loader:boolean = false;
  roomname: string;

  constructor(private router: Router,
    private nativeStorage: NativeStorage) {

    // Get the stored chat information
    this.nativeStorage.getItem('chatinfo').then(
      chatInfo => {
        this.roomkey = chatInfo.Key;
        this.username = chatInfo.UserName;
        this.roomname = chatInfo.RoomName;
 
        this.data.type = 'message';
        this.data.username = this.username;
      
        let joinData = firebase.database().ref('chatrooms/'+this.roomkey+'/chats').push();
        joinData.set({
          type:'join',
          user:this.data.username,
          message:this.data.username+' has joined this room.',
          sendDate:Date()
        });
        this.data.message = '';
      
        firebase.database().ref('chatrooms/'+this.roomkey+'/chats').on('value', resp => {
          this.chats = [];
          this.chats = snapshotToArray(resp);
          setTimeout(() => {
            if(this.offStatus === false) {
              this.content.scrollToBottom(300);
            }
          }, 1000);
        });
      },
      error => {
        this.router.navigateByUrl('/chatrooms');
      }
    );
  }

  ngOnInit() {
  }

  userTyping(event: any) {
    this.userInput = event.target.value;

    if (this.userInput.length !== 0) {
      this.isEnabled = true;
    }
    else
    {
      this.isEnabled = false;
    }    
    
    this.scrollDown();
    setTimeout(() => {
      this.senderSends();
    }, 500);
  }

  sendMessage() {
    let newData = firebase.database().ref('chatrooms/'+this.roomkey+'/chats').push();
    newData.set({
      type:this.data.type,
      user:this.data.username,
      message:this.data.message,
      sendDate:Date()
    });
    this.data.message = '';
    this.scrollDown();
    setTimeout(() => {
      this.senderSends();
    }, 500);
  }
  
  senderSends() {
    this.loader = true;
    setTimeout(() => {
      // this.msgList.push({
      //   userId: this.User,
      //   userName: this.User,
      //   userAvatar: "../../assets/chat/chat5.jpg",
      //   time: "12:01",
      //   message: "Sorry, didn't get what you said. Can you repeat that please"
      // });
      this.loader = false;
      this.scrollDown();
    }, 2000)
    this.scrollDown();
  }
  
  scrollDown() {
    setTimeout(() => {
      this.content.scrollToBottom(50);
    }, 50);
  }

  exitChat() {
    let exitData = firebase.database().ref('chatrooms/'+this.roomkey+'/chats').push();
    exitData.set({
      type:'exit',
      user:this.data.username,
      message:this.data.username+' has exited this room.',
      sendDate:Date()
    });
  
    this.offStatus = true;
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
