import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BaseApi } from 'src/app/core/networks/baseApi.service';
import { SocketService } from 'src/app/core/socketApi';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes:Routes=[
{path:'',component:WelcomePageComponent,children:[
{path:'login' , component:LoginComponent},
{path:'register', component:RegisterComponent}
]
}
]





@NgModule({
  declarations: [LoginComponent, RegisterComponent, WelcomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap:[WelcomePageComponent],
  providers:[SocketService ,BaseApi ],
})
export class AuthenticationModule { }
