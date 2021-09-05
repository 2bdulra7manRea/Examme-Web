import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthUser } from './core/guards/auth.guard';
import { CheckForUser } from './core/guards/checking.guard';


const routes: Routes = [
{path:'' , redirectTo:'/auth2/login' , pathMatch:"full"},
{path:'auth2',loadChildren:()=>import('./pages/authentication/authentication.module').then((m)=>m.AuthenticationModule) },
{path:'app' ,canActivate:[AuthUser],loadChildren:()=>import('./pages/dashboard-main/dashboard-main.module').then((m)=>m.DashboardMainModule)},
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
