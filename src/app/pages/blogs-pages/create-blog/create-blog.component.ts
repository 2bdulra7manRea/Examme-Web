import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseApi } from 'src/app/core/networks/baseApi.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {
blog:any;
title:string='';
public set editorData(v :any) {
  this.blog= v;
}

errorFound:boolean=false;
userid:string=localStorage.getItem('userid');
  constructor(private httpService:BaseApi,private router:Router) { }

  ngOnInit(): void {
  }





  CreateBlog(){
  let Info={
    title:this.title,
    content:this.blog,
    userId:this.userid,
  }

if(!this.blog){
this.errorFound=true;
  return;
}


this.httpService.createBlog(Info).subscribe((val)=>{
  this.router.navigate(['/app/blogs/list'])
},(err)=>{
  console.log(err)
})

}

}
