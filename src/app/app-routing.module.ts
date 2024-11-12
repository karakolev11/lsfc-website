import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CommentsComponent } from './pages/comments/comments.component';

const routes: Routes = [
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'gallery', title: 'Gallery', component: GalleryComponent },
  { path: 'contact-page', title: 'Contacts', component: ContactComponent },
  { path: 'comments-section', title: 'Comments', component: CommentsComponent },

  /* Rerouting to home page if url is non existent */
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
