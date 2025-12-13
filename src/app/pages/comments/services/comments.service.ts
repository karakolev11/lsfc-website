import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Comment } from '../models/comment.model';
import { CommentsMock } from '../mock/comments-list.mock';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private readonly baseUrl = '/api/Comments';
  private _refresh$ = new Subject<void>();
  public readonly refresh$ = this._refresh$.asObservable();

  constructor(private readonly http: HttpClient) { }

  public getAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.baseUrl);
  }

  public getById(id: string | number): Observable<Comment> {
    return this.http.get<Comment>(`${this.baseUrl}/${id}`);
  }

  public create(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.baseUrl, comment)
      .pipe(
        tap(() => this._refresh$.next())
      );
  }

  public update(id: string | number, comment: Partial<Comment>): Observable<Comment> {
    return this.http.put<Comment>(`${this.baseUrl}/${id}`, comment);
  }

  public delete(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Keep existing mock helper for local/demo use
  public pushToMockComments(comment: Comment): void {
    comment.createdAt = new Date();
    comment.rating = Math.floor(Math.random() * 5) + 1;
    CommentsMock.unshift(comment);
    this._refresh$.next();
  }
}
