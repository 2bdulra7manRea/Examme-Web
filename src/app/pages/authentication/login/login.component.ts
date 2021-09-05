import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthCheckingUser } from 'src/app/core/api.service/actions/api.actions';
import { BaseApi } from 'src/app/core/networks/baseApi.service';
import { SocketService } from 'src/app/core/socketApi';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

loginForm:FormGroup
errorISFound:boolean=false;
userId:any;
constructor(private apiService:BaseApi,private store:Store<boolean>,private router:Router,private Socket:SocketService) {
    this.initForm();
  }

  ngOnInit(): void {
  }


initForm(){
this.loginForm=new FormGroup({
email:new FormControl('',Validators.required),
password:new FormControl('',Validators.required),
})
}



submit(){
if(this.loginForm.invalid){
  this.errorISFound=true;
  return;
}

this.sendData();

}



sendData(){
let data=this.prepareDataForm();
  this.apiService.userLogin(data).subscribe((val)=>{
    this.userId = val['message']._id;
    const NameUser=val['message'].name;
    const token=val['message'].token;
    localStorage.setItem('userid', this.userId);
    localStorage.setItem('userName',NameUser)
   // this.Socket.connectTHEservers(NameUser);
    //this.Socket.userOpendHisaAccount();
    localStorage.setItem('token',token);
    this.store.dispatch(new AuthCheckingUser({userLogged:true}))
    this.router.navigate(['/app']);
},(err)=>{
this.errorISFound=true;
})
}


prepareDataForm(){
let  controls=this.loginForm.controls;
let FD:any={};
FD.email=controls.email.value;
FD.password=controls.password.value;
return FD
}


closeError(){
  this.errorISFound=false;
}


}
