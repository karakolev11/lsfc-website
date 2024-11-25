import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { SharedModule } from "../../shared/shared.module";
import { AddGalleryItemDialogComponent } from './components/add-gallery-item-dialog/add-gallery-item-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GalleryListComponent } from './components/gallery-list/gallery-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    GalleryComponent,
    AddGalleryItemDialogComponent,
    GalleryListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule

]
})
export class GalleryModule { }
