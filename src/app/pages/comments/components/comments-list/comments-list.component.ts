import { Component } from '@angular/core';
import { Comment } from '../../models/comment.model';
import { CommentsMock } from '../../mock/comments-list.mock';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.css'
})
export class CommentsListComponent {
  public comments: Comment[] = CommentsMock;

  constructor() {}
}
