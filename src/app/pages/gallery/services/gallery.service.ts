import { Injectable } from '@angular/core';
import { GalleryItem } from '../models/gallery-item.model';
import { GalleryListMock } from '../mock/gallery-list.mock';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }

  addImageToMockArray(image: GalleryItem): void {
    image.isNew = true;
    image.likes = Math.floor(Math.random() * 5) + 1;
    image.date = new Date();
    GalleryListMock.unshift(image);
  }
}
