import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { SharedModule } from "../../shared/shared.module";



@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
]
})
export class GalleryModule { }
