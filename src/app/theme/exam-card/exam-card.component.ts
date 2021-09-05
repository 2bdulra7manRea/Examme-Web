import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-exam-card',
  templateUrl: './exam-card.component.html',
  styleUrls: ['./exam-card.component.scss']
})
export class ExamCardComponent implements OnInit {
@Input() item:any;
faEdit=faEdit
faEye=faEye
faFileAlt=faFileAlt;
userId:any
  constructor(private router:Router) {
  this.userId=  localStorage.getItem('userid');
  console.log(this.userId)
   }

  ngOnInit(): void {
  }

  routToInfo(){
    this.router.navigate(['/app/exam/info/',this.item._id]).then()
  }

  routToStart(){
    this.router.navigate(['/app/exam/start/',this.item._id]).then()
  }

  routToCreate(){
    this.router.navigate(['/app/exam/form/',this.item._id]).then()
  }

}
