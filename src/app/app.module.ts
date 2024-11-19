import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { GalleryModule } from './pages/gallery/gallery.module';
import { CommentsModule } from './pages/comments/comments.module';
import { ContactModule } from './pages/contact/contact.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    GalleryModule,
    CommentsModule,
    ContactModule,
    CoreModule,
    SharedModule,
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
