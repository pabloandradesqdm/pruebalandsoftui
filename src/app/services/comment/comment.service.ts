import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: Http, private httpClient: HttpClient) { }

  public getCommentsByPost(id:number) {
    return this.httpClient.get('http://localhost:8084/Post/GetCommentForPostId?postId=' + id);
  }

  public creeateComment(comment: string) {
    let headers = new Headers();
    let url = "http://localhost:8084/Post/CreateComment";

    return this.http.post(url, comment, { headers: headers });
  }

  public deleteComment(id: number) {
    let headers = new Headers();
    let url = "http://localhost:8084/Post/DeleteComment?id=" + id;

    return this.http.post(url, id, { headers: headers });
  }
  
}
