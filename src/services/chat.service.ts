import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';
import { chatMessage } from '../app/models/chatmessage.model';
import { Http } from '@angular/http';

@Injectable()
export class ChatService {
  user: any;
  chatmessages:any
  chatMessage: any
  userName: any
  constructor(private http: Http, private db: AngularFireDatabase, private auth: AngularFireAuth) {
    this.auth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }
    })

    this.getUser().subscribe(a => {
      this.userName = a
    });

  }


  getUser() {
    const userId = 1;
    const path = `/users/${userId}`;
    return this.db.object(path).valueChanges();
  }

  getUsers() {
    const path = '/users';
    return this.db.list(path);
  }

  sendMessage(msg: String) {
    console.log("this is chatting ")
    const Timestamp = this.getTimeStamp();
    const email = 'kranthi';
    this.chatmessages = this.getMessages();
    this.chatmessages.push({
      email: email,
     // userName: this.userName,
      msg: msg,
      timeSent: Timestamp
    })
    //return this.http.put('https://shop-myshopk3.firebaseio.com/chat',msg)
  }
  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
                 (now.getUTCMonth() + 1) + '/' +
                 now.getUTCDate();
    const time = now.getUTCHours() + ':' +
                 now.getUTCMinutes() + ':' +
                 now.getUTCSeconds();

    return (date + ' ' + time);
  }
  
  getMessages(): AngularFireList<chatMessage[]> {
    // query to create our message feed binding
    console.log(this.db.list('messages'));
    return this.db.list('messages');
    
  }
}