import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Comment } from '../../models/comment.model';
import { CommentsService } from '../../services/comments.service';
import { CommentsMock } from '../../mock/comments-list.mock';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.css'
})
export class CommentsListComponent implements OnInit, OnDestroy {
  public comments: Comment[] = [];
  private destroy$ = new Subject<void>();

  constructor(private readonly commentsService: CommentsService) {}

  ngOnInit(): void {
    this.loadComments();

    this.commentsService.refresh$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.loadComments());
  }

  private loadComments(): void {
    this.commentsService.getAll().subscribe({
      next: (items) => this.comments = [...CommentsMock, ...items],
      error: () => {
        // fallback to local mock if API call fails
        // lazy import to avoid circular reference issues
        import('../../mock/comments-list.mock').then(m => this.comments = m.CommentsMock);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
