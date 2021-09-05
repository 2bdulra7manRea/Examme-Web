import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthCheckingUser } from 'src/app/core/api.service/actions/api.actions';
import { BaseApi } from 'src/app/core/networks/baseApi.service';
import { SocketService } from 'src/app/core/socketApi';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

RForm:FormGroup
errorISFound:boolean=false;
userId:any;
constructor(private apiService:BaseApi,private store:Store<boolean>,private router:Router,private Socket:SocketService) {
    this.initForm();
  }

  ngOnInit(): void {
  }


initForm(){
this.RForm=new FormGroup({
name:new FormControl('',Validators.required),  
email:new FormControl('',Validators.required),
password:new FormControl('',Validators.required),
})
}



submit(){

this.sendData();

}



sendData(){
let data=this.prepareDataForm();
console.log(data)
  this.apiService.userRegister(data).subscribe((val)=>{
    this.userId = val['message']._id;
    const NameUser=val['message'].name;
    const token=val['message'].token;
    localStorage.setItem('userid', this.userId);
    localStorage.setItem('userName',NameUser)
    //this.Socket.connectTHEservers(NameUser);
    //this.Socket.userOpendHisaAccount();
    localStorage.setItem('token',token);
    this.store.dispatch(new AuthCheckingUser({userLogged:true}))
    this.router.navigate(['/app']);
    console.log(val)
},(err)=>{
  console.log(err)
this.errorISFound=true;
})

}


prepareDataForm(){
let  controls=this.RForm.controls;
let FD:any={
name:controls.name.value,
email:controls.email.value,
password:controls.password.value,
};

return FD
}


closeError(){
  this.errorISFound=false;
}

}