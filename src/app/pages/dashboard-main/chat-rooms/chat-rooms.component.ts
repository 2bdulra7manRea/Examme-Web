import { Component, OnInit } from '@angular/core';
import { BaseApi } from 'src/app/core/networks/baseApi.service';
import { SocketService } from 'src/app/core/socketApi';

@Component({
  selector: 'app-chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: ['./chat-rooms.component.scss']
})
export class ChatRoomsComponent implements OnInit {
rooms:any;
  constructor(private socket: SocketService ,private httpService: BaseApi) { }

  ngOnInit(): void {
    this.socket.connectTHEservers(localStorage.getItem('userName')); 
      this.socket.userOpendHisaAccount();

    this.httpService.getRooms().subscribe((room) => {
      this.rooms = room;
    })
    this.socket.GetPeopleFromOutSideTheRoom().subscribe((p) => {
      this.rooms = p['rooms'];
    })


  }


createRoom(){}


}
