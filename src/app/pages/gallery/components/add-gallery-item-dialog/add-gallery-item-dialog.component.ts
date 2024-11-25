import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GalleryItem } from '../../models/gallery-item.model';
import { GalleryService } from '../../services/gallery.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-gallery-item-dialog',
  templateUrl: './add-gallery-item-dialog.component.html',
  styleUrl: './add-gallery-item-dialog.component.css'
})
export class AddGalleryItemDialogComponent {

  public galleryItemForm: FormGroup = this.fb.group({
    title:       this.fb.control(undefined, [Validators.required]),
    description: this.fb.control(undefined),
  });

  constructor(
    private self: MatDialogRef<AddGalleryItemDialogComponent>, 
    private galleryService: GalleryService,
    private fb: FormBuilder       
  ) {}

  public onClose(): void {
    this.self.close();
  }

  public onAddItem(): void {
    let item = this.galleryItemForm.value as GalleryItem;
    this.galleryService.addImageToMockArray(item);
    this.self.close(item);
  }
}
