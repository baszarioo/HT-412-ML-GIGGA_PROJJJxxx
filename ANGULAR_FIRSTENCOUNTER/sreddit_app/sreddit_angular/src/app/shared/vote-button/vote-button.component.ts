import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from '../post-model';
import { faArrowUp, faArrowDown, faComments } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { PostService } from '../post.service';
import { ToastrService } from 'ngx-toastr';
import { VotePayload } from './vote-payload';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent implements OnInit {
  @Input() 
  post: PostModel;
  votePayload: VotePayload;
  public faArrowUp: IconDefinition = faArrowUp;
  public faArrowDown: IconDefinition = faArrowDown;
  upvoteColor: string = '';
  downvoteColor: string = '';
   isLoggedIn: boolean=false;
  //  to implement voteService!
  constructor(private authService: AuthService,
   private postService: PostService, private toastr: ToastrService) {
      this.votePayload = {
        voteType: undefined,
        postId: undefined
      }
      this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
   }
  ngOnInit(): void {

  }
}
