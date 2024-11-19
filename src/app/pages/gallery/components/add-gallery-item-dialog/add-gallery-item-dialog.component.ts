import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GalleryItem } from '../../models/gallery-item.model';
import { GalleryService } from '../../services/gallery.service';


@Component({
  selector: 'app-add-gallery-item-dialog',
  templateUrl: './add-gallery-item-dialog.component.html',
  styleUrl: './add-gallery-item-dialog.component.css'
})
export class AddGalleryItemDialogComponent {

  constructor(
    private self: MatDialogRef<AddGalleryItemDialogComponent>, 
    private galleryService: GalleryService       
  ) {}

  public onClose(): void {
    this.self.close();
  }

  public onAddItem(item: GalleryItem): void {
    this.galleryService.addImageToMockArray(item);
    this.self.close(item);
  }
}
