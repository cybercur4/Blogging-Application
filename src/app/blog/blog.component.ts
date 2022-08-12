import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let response=this.http.get("http://localhost:8080/posts");
    response.subscribe((data)=>this.posts=data);
  }

}
