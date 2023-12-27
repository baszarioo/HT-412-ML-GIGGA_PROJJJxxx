import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommentPayload } from 'src/app/comment/comment-payload';
import { CommentService } from 'src/app/comment/comment.service';
import { PostModel } from 'src/app/shared/post-model';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  postId: number;
  post: PostModel;
  commentForm: FormGroup;
  commentPayload: CommentPayload;
  comments: CommentPayload[];
  constructor(private postService: PostService, private activateRoute: ActivatedRoute,
   private commentService: CommentService, private router: Router) {
    this.postId = this.activateRoute.snapshot.params['id'];
    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required)
    });
    this.commentPayload = {
      text: '',
      postId: this.postId
    };
  }
  //   this.postService.getPost(this.postId).subscribe({
  //     next: (data) => {
  //       this.post = data;
  //     }, error: (error) => {
  //       throw error;
  //     }
  //   });
  // }
  ngOnInit(): void {
    this.getPostById();
    this.getCommentsForPost(); 
  }
  postComment() {
    this.commentPayload.text = this.commentForm.get('text').value;
    this.commentService.postComment(this.commentPayload).subscribe({
      next: (data) => {
        this.commentForm.get('text')?.setValue('');
        this.getCommentsForPost();
      }, 
      error: (error) => {
        throw (error);
      }
    });
  }
  private getPostById() {
   this.postService.getPost(this.postId).subscribe({
    next: (data) => {
      this.post = data;
    }, error: (error) => {
    throw (error);
    }
  });
 }
 private getCommentsForPost() {
  this.commentService.getAllCommentsForPost(this.postId).subscribe({
    next: (data) => {
    this.comments = data;
    }, error: (error) => {
      throw (error);
    }
  });
 }
}
