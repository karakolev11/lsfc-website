import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    NavigationBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    NavigationBarComponent,
    FooterComponent,
    MatIconModule
  ]
})
export class SharedModule { }
