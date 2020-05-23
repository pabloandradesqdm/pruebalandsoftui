import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: Http, private httpClient: HttpClient) {
  }

  public getPosts() {
    return this.httpClient.get('http://localhost:8084/Post/GetPosts');
  }

  public updatePost(id: number, post: string) {
    let headers = new Headers();
    let url = "http://localhost:8084/Post/UpdatePost?id=" + id;

    return this.http.post(url, post, { headers: headers });
  }
}
