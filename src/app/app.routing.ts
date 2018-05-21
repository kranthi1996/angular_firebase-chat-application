
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatRoomComponent } from './chat-room/chat-room.component';
import { MessageComponent } from './message/message.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';


export const routes: Routes = [
    {
        path: 'chat',
        component: ChatRoomComponent
    },
    {
        path: 'signup',
        component: SignupFormComponent
    },
    {
        path: 'login',
        component: LoginFormComponent
    },
    {
        path:'',
        redirectTo:'/login',
        pathMatch:'full'
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }