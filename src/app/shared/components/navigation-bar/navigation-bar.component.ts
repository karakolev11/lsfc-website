import { Component, OnDestroy } from '@angular/core';
import { NavigationItem } from '../../models/navigation-item.model';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

  public navItems: NavigationItem[] = [
    { label: 'Home', path: '' },
    { label: 'Gallery', path: 'gallery' },
    { label: 'Comments', path: 'comments-section' },
    { label: 'Contact', path: 'contact-page' },
  ];

  public isLoggedIn = false;
  private sub?: Subscription;

  constructor(private readonly router: Router, private readonly auth: AuthService) {
    this.sub = this.auth.isLoggedIn$.subscribe(state => this.isLoggedIn = state);
  }
  public navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  public logout(): void {
    this.auth.logout();
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
