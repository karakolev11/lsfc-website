import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentsService } from '../../services/comments.service';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.css'
})
export class AddCommentComponent {

  public comment: FormGroup = this.fb.group({
    username: this.fb.control(undefined, [Validators.required]),
    text:     this.fb.control(undefined, [Validators.required])
  })

  constructor(private readonly fb: FormBuilder,
              private readonly commentsService: CommentsService) {}

  public submit(): void {
    let data = this.comment.value as Comment;

    console.log(data);
    this.commentsService.pushToMockComments(data);
    this.comment.reset();
  }

}
