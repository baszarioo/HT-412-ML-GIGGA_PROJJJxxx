import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from '../post-model';
import { PostService } from '../post.service';
import { Router } from '@angular/router'
import { faArrowUp, faArrowDown, faComments } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})
export class PostTileComponent implements OnInit {
  public faArrowUp: IconDefinition = faArrowUp;
  public faArrowDown: IconDefinition = faArrowDown;
  public faComments: IconDefinition = faComments;
  @Input() posts: PostModel[];
  constructor(private postService: PostService, private router: Router) {

  }
  ngOnInit(): void {
    
  }
  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }
}
 