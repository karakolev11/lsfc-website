import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'gallery', title: 'Gallery', component: GalleryComponent, canActivate: [AuthGuard] },
  { path: 'contact-page', title: 'Contacts', component: ContactComponent },
  { path: 'comments-section', title: 'Comments', component: CommentsComponent, canActivate: [AuthGuard] },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: 'register', title: 'Register', component: RegisterComponent },

  /* Rerouting to home page if url is non existent */
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
