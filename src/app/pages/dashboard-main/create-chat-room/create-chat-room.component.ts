import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseApi } from 'src/app/core/networks/baseApi.service';
import { SocketService } from 'src/app/core/socketApi';

@Component({
  selector: 'app-create-chat-room',
  templateUrl: './create-chat-room.component.html',
  styleUrls: ['./create-chat-room.component.scss']
})
export class CreateChatRoomComponent implements OnInit {
users:any;
loading:boolean=true;
  constructor(private httpService:BaseApi ,private router:Router ,private socket: SocketService) { }

  ngOnInit(): void {

    this.httpService.gettingusers().subscribe((val)=>{
      console.log(val);
      this.users=val['message']
      this.loading=false;
    })

  }



 Create(myform) {
   const bodyForm=myform.value
   if(!bodyForm.name){
     return;
   }
    let userName = localStorage.getItem('userName');
    const body = {
      userName: userName,
      name: bodyForm.name,
      access: bodyForm.access,
      type: bodyForm.type,
      invitation: bodyForm.invite
    }
    this.socket.createRoom(body)


    this.router.navigate(['/app/chat-rooms'])
  }
 


}
