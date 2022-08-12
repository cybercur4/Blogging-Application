import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostBlogService {

  constructor(private http:HttpClient) { }

  public doPost(post:Post){
    return this.http.post("http://localhost:8080/postblog",post,{responseType:'text' as 'json'});
  }
}
