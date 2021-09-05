import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/core/socketApi';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
userName:any;
userId:any;
  constructor(private Socket:SocketService , private router:Router) {
this.userName=localStorage.getItem('userName');
this.userId=localStorage.getItem('userid');
   }

  ngOnInit(): void {
  }


  LogOut(){
  localStorage.removeItem('userName')
  localStorage.removeItem('userid')
  localStorage.removeItem('token')
  this.Socket.connectTHEservers(this.userName);
  this.Socket.disconnectSocket();
  setTimeout(() => {
   this.router.navigate(['/auth2/login']) 
  },2000);
  
}


ngOnDestroy(): void {
  this.Socket.connectTHEservers(this.userName);
  this.Socket.disconnectSocket();
}

}
