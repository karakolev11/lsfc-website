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
    data.createdAt = new Date();
    data.rating = Math.floor(Math.random() * 5) + 1;
    this.commentsService.create(data).subscribe({
      next: () => {
        this.comment.reset();
      },
      error: () => {
        // fallback to mock if API unavailable
        this.commentsService.pushToMockComments(data);
        this.comment.reset();
      }
    });
  }

}
