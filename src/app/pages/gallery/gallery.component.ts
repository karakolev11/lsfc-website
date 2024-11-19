import { Component } from '@angular/core';
import { GalleryItem } from './models/gallery-item.model';
import { GalletyListMock } from './mock/gallery-list.mock';
import { GalleryService } from './services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  public galleryList: GalleryItem[] = GalletyListMock;

  constructor(private galleryService: GalleryService) {}

  public addItem(): void {
    console.log('add-item')
  }
}
