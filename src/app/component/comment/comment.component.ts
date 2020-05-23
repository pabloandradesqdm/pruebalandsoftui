import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../../services/comment/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  name: string;
  email: string;
  body: string;
  comments: any[];

  @Input()
  idComment: number;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.commentService.getCommentsByPost(this.idComment).subscribe(res => {

      var commentsArr = Object.keys(res).map(key => {
        return res[key];
      });

      var message = commentsArr["message"];

      if (message != null) {
        alert(message);
      }
      else {
        this.comments = commentsArr;
      }
    }, err => {
      console.log(err);
    });
  }

  createComment() {
    var commentCrt = {
      postId: this.idComment,
      name: this.name,
      email: this.email,
      body: this.body
    };
    this.commentService.creeateComment(JSON.stringify(commentCrt)).subscribe(res => {
      debugger;
      var postArr = res.text().replace(/'/g, "\"");
      var message = JSON.parse(postArr);
      var text = message["message"];
      if (text != null) {
        alert(message["message"]);
      }
      else {
        this.name = "";
        this.email = "";
        this.body = "";
        alert("Create Comment successful.");
      }
    }, err => {
      console.log(err);
    });
  }

}
