import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GalleryItem } from '../models/gallery-item.model';
import { GalleryListMock } from '../mock/gallery-list.mock';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  
  private readonly baseUrl = '/api/Photo';

  constructor(private http: HttpClient) { }

  getAll(): Observable<GalleryItem[]> {
    return this.http.get<GalleryItem[]>(this.baseUrl);
  }

  getById(id: string | number): Observable<GalleryItem> {
    return this.http.get<GalleryItem>(`${this.baseUrl}/${id}`);
  }

  create(item: GalleryItem): Observable<GalleryItem> {
    return this.http.post<GalleryItem>(this.baseUrl, item);
  }

  update(id: string | number, item: Partial<GalleryItem>): Observable<GalleryItem> {
    return this.http.put<GalleryItem>(`${this.baseUrl}/${id}`, item);
  }

  delete(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Keep existing mock helper for local/demo use
  addImageToMockArray(image: GalleryItem): void {
    image.isNew = true;
    image.likes = Math.floor(Math.random() * 5) + 1;
    image.createdAt = new Date();
    GalleryListMock.unshift(image);
  }
}
