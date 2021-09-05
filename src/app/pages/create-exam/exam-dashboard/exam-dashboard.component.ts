import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseApi } from 'src/app/core/networks/baseApi.service';

@Component({
  selector: 'app-exam-dashboard',
  templateUrl: './exam-dashboard.component.html',
  styleUrls: ['./exam-dashboard.component.scss']
})
export class ExamDashboardComponent implements OnInit {
  loading$:BehaviorSubject<boolean>
  myExams: any;
  generalExams:any;
  current: number = 0;
@ViewChild("nav") Nav:ElementRef<HTMLDivElement>
@ViewChild("btn1") btn:ElementRef<HTMLButtonElement>
  constructor(private httpService: BaseApi) {
    this.loading$=new BehaviorSubject<boolean>(false);

   }
  async ngOnInit() {
    const userid = await localStorage.getItem('userid');

    this.httpService.getUserExams(userid).subscribe((res) => {
     if(!!res){
       this.myExams=res['exmas'];
     }
    })



    this.httpService.getExams().subscribe((res) => {
    if(!!res){
      this.generalExams=res['exmas']
      console.log(res)
      this.loading$.next(true)
      console.log(this.loading$.value)
    }else{
      this.loading$.next(true)
      
    }
    },(err)=>{this.loading$.next(true)})
  }

  toggleNav(){
    if(this.btn.nativeElement.textContent==='open'){
    this.Nav.nativeElement.style.width='20%'
    this.btn.nativeElement.textContent='close'
    }else{
      this.Nav.nativeElement.style.width='0px'
    this.btn.nativeElement.textContent='open'
    }
    

  }

  display(index) {
    this.current = index;
  }

}
