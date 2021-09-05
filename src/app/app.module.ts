import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store'
import { UserReducer } from './core/service/_reducer/reducer';
import { ApiReducer } from './core/api.service/reducer/api.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocketService } from './core/socketApi';
import { SocketIoModule } from 'ngx-socket-io';
import { AuthUser } from './core/guards/auth.guard';
import { ComponentsService } from './core/component.service';
import { CheckForUser } from './core/guards/checking.guard';
import { environment } from 'src/environments/environment';
import { PipeTimePipe } from './pipes/pipe-time.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
declarations: [
AppComponent,
PipeTimePipe,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    SocketIoModule.forRoot({url:environment.baseUrl,options:{}}),
    StoreModule.forRoot({infoUserAuth:ApiReducer}),
  ],
  providers: [SocketService , AuthUser ,ComponentsService ,CheckForUser],
  bootstrap: [AppComponent]
})
export class AppModule { }
