import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  showComments: boolean;
  idComment: number;
  posts: any[];

  constructor(private postService: PostService) {
    this.showComments = false;
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe(res => {

      var postArr = Object.keys(res).map(key => {
        return res[key];
      });

      var message = postArr["message"];

      if (message != null) {
        alert(message);
      }
      else {
        this.posts = postArr;
      }
    }, err => {
      console.log(err);
    });
  }

  updatePost(post: any) {
    this.postService.updatePost(post.id, JSON.stringify(post)).subscribe(res => {
      var postArr = res.text().replace(/'/g, "\"");
      var message = JSON.parse(postArr);
      alert(message["message"]);
    }, err => {
      console.log(err);
    });
  }

  getComments(id) {
    this.idComment = id;
    this.showComments = true;
  }

  hideComments() {
    this.showComments = false;
  }

}
