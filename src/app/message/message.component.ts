import { Component, OnInit ,Input} from '@angular/core';
import { chatMessage } from '../models/chatmessage.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

@Input() messagesData:any
/*email:String;
messageContent:String;
timestamp:Date=new Date();
  constructor() { }
  ngOnInit(chatmessage=this.messagesData) {
    console.log(chatmessage)
     this.messageContent=chatmessage.msg;
     this.timestamp=chatmessage.timeSent;
     this.email=chatmessage.email;
  }*/
  ngOnInit(){
    console.log(this.messagesData)
  }
  
}
