import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostBlogService } from '../post-blog.service';

@Component({
  selector: 'app-postblog',
  templateUrl: './postblog.component.html',
  styleUrls: ['./postblog.component.css']
})
export class PostblogComponent implements OnInit {

  post: Post=new Post("","","");
  message:any;
  constructor(private service:PostBlogService) { }

  ngOnInit(): void {
  }

  public postNow(){
    let resp=this.service.doPost(this.post);
    resp.subscribe((data)=>this.message=data)
    alert("Successfuly Posted!");
  }

}
