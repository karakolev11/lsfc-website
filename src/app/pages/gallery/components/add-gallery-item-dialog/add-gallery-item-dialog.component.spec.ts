import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGalleryItemDialogComponent } from './add-gallery-item-dialog.component';

describe('AddGalleryItemDialogComponent', () => {
  let component: AddGalleryItemDialogComponent;
  let fixture: ComponentFixture<AddGalleryItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddGalleryItemDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddGalleryItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
