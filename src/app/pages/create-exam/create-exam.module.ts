import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamFormComponent } from './exam-form/exam-form.component';
import { ExamHomeComponent } from './exam-home/exam-home.component';
import { ExamStartComponent } from './exam-start/exam-start.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ExamDashboardComponent } from './exam-dashboard/exam-dashboard.component';
import {HttpClientModule}from '@angular/common/http'
import { BaseApi } from 'src/app/core/networks/baseApi.service';
import { ExamInfoComponent } from './exam-info/exam-info.component';
import { ThemeModule } from 'src/app/theme/theme.module';
import { ExamCardComponent } from 'src/app/theme/exam-card/exam-card.component';

const childs:Routes=[
{path:'' ,component:ExamDashboardComponent},
{path:'form/:id', component:ExamFormComponent},
{path:'start/:id',component:ExamStartComponent},
{path:'info/:id',component:ExamInfoComponent},
{path:'create',component:ExamHomeComponent},
]


@NgModule({
  declarations: [ExamFormComponent, ExamHomeComponent, ExamStartComponent, ExamDashboardComponent, ExamInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(childs),
    HttpClientModule, 
    ThemeModule   
  ],
  entryComponents:[ExamCardComponent],
  providers:[BaseApi],
})
export class CreateExamModule { }
