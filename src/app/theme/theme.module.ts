import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BaseApi } from '../core/networks/baseApi.service';
import { SocketService } from '../core/socketApi';
import { ExamCardComponent } from './exam-card/exam-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [HeaderComponent, ExamCardComponent],
  imports: [
    CommonModule,
    FontAwesomeModule

  ],
  exports:[HeaderComponent , ExamCardComponent],
  providers:[SocketService ,BaseApi    ]
})
export class ThemeModule { }
