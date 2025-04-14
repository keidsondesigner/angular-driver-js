import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/components/header/header.component';
import { HomeComponent } from './app/components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeComponent],
  template: `
    <app-header></app-header>
    <app-home></app-home>
  `
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App).catch(err => console.error(err));