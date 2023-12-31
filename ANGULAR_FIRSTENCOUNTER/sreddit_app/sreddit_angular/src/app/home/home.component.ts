import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { PostModel } from '../shared/post-model';
import { faArrowUp, faArrowDown, faComments } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public faArrowUp: IconDefinition = faArrowUp;
  public faArrowDown: IconDefinition = faArrowDown;
  public faComments: IconDefinition = faComments;
  posts: Array<PostModel> = [];
  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
    });
   }
  ngOnInit(): void {
    
  }
}
