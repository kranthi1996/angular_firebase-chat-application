import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat.service';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
feed:any;
  constructor(private chatservice:ChatService) { }

  ngOnInit() {
  
   this.chatservice.getMessages().valueChanges().subscribe(data=>{
    this.feed=data;
    console.log(this.feed)
   })
   
  }

}
