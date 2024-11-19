import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GalletyListMock } from '../../mock/gallery-list.mock';
import { GalleryItem } from '../../models/gallery-item.model';
import { AddGalleryItemDialogComponent } from '../add-gallery-item-dialog/add-gallery-item-dialog.component';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrl: './gallery-list.component.css'
})
export class GalleryListComponent {
  public galleryList: GalleryItem[] = GalletyListMock;

  constructor(private dialog: MatDialog) {}

  public addItem(): void {
    const dialog = this.dialog.open(AddGalleryItemDialogComponent, {
    });

    dialog.afterClosed().subscribe({
      next: result => {
        console.log(result);
      }
    })
  }
}
