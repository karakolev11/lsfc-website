import { Injectable } from '@angular/core';
import { Comment } from '../models/comment.model';
import { CommentsMock } from '../mock/comments-list.mock';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor() { }

  public pushToMockComments(comment: Comment): void {
    comment.date = new Date();
    comment.rating = Math.floor(Math.random() * 5) + 1;
    CommentsMock.unshift(comment)
  }
}
