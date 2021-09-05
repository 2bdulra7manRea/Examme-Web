import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent  } from '../account/user-profile/user-profile.component';
import { CreateBlogComponent   } from '../blogs-pages/create-blog/create-blog.component';
import { ListBlogsComponent    } from '../blogs-pages/list-blogs/list-blogs.component';
import { CameraRecordComponent } from './camera-record/camera-record.component';
import { PlaygroundComponent   } from './playground/playground.component';
import { TakeExamComponent     } from './take-exam/take-exam.component';
import { DialogFollowersComponent } from 'src/app/components/dialog-followers/dialog-followers.component';
import { DialogRoomComponent } from 'src/app/components/dialog-room/dialog-room.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ThemeModule } from 'src/app/theme/theme.module';
import { HeaderComponent } from 'src/app/theme/header/header.component';
import { BaseApi } from 'src/app/core/networks/baseApi.service';
import { SocketService } from 'src/app/core/socketApi';
import { HttpClientModule } from '@angular/common/http';
import { ChatRoomsComponent } from './chat-rooms/chat-rooms.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { CreateChatRoomComponent } from './create-chat-room/create-chat-room.component';
const routes: Routes = [
  {path:'',component:DashboardHomeComponent, children:[
  {path:'' , component:HomeComponent},
  { path: 'playground', component: PlaygroundComponent },
  { path: "chat-rooms/room/:id", component: CameraRecordComponent },
  { path: "chat-rooms/create", component: CreateChatRoomComponent },
  { path: "chat-rooms", component: ChatRoomsComponent },
  { path: "take-exam/:id", component: TakeExamComponent },
  { path: "blogs/list", component: ListBlogsComponent },
  { path: "blogs/list/create", component: CreateBlogComponent },
  { path: "myaccount/:id", component: UserProfileComponent },
  {path:'exam' , loadChildren:()=>import('./../create-exam/create-exam.module').then((m)=>m.CreateExamModule)}
  ]},

]


@NgModule({
  declarations: [
    DashboardHomeComponent,
    UserProfileComponent,
    HomeComponent,
    CreateBlogComponent,
    ListBlogsComponent,
    CameraRecordComponent,
    PlaygroundComponent,
    TakeExamComponent,
    DialogRoomComponent,
DialogFollowersComponent,
ChatRoomsComponent,
CreateChatRoomComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    ThemeModule,
    HttpClientModule,
    CKEditorModule
  ],
  entryComponents:[HeaderComponent],
  providers:[SocketService ,BaseApi ],
  bootstrap:[DashboardHomeComponent]
})
export class DashboardMainModule { }
