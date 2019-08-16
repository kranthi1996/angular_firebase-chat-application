import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  message: String;
  constructor(private chatservice: ChatService) { }

  ngOnInit() {
  }
  send() {
    this.chatservice.sendMessage(this.message)
    this.message = "";
  }
  handleSubmit(event) {
    console.log(event)
    if (event.keyCode === 13) {
      this.send()
    }
  }
}
