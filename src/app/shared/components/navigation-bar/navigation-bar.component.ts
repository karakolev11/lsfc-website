import { Component } from '@angular/core';
import { NavigationItem } from '../../models/navigation-item.model';
import { Router } from '@angular/router';

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

  constructor(private readonly router: Router) {}

  public navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
