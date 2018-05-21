import { BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { FeedComponent } from './feed/feed.component';
import { MessageComponent } from './message/message.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';


import {AuthService} from '../services/auth.service';
import {ChatService} from '../services/chat.service';


import{ FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {HttpModule} from "@angular/http";

import {environment} from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    ChatFormComponent,
    ChatRoomComponent,
    FeedComponent,
    MessageComponent,
    SignupFormComponent,
    LoginFormComponent,
    NavbarComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    CommonModule
  ],
  providers: [ChatService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
