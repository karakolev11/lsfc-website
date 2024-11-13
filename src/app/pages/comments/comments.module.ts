import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { SharedModule } from "../../shared/shared.module";
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CommentsComponent,
    AddCommentComponent,
    CommentsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
]
})
export class CommentsModule { }
