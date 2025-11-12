import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftMain } from './left-main/left-main';
import { Suggestions } from './suggestions/suggestions';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Editfeedback } from './editfeedback/editfeedback';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, LeftMain],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  isEditFeedbackPage: boolean = false;
  protected readonly title = signal('product-feedback');
  ovalImage: string = 'assets/Oval.png';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isEditFeedbackPage = event.urlAfterRedirects === '/edit-feedback';
      }
    });
  }

  onOpenEditFeedback(id: number) {
    this.isEditFeedbackPage = true;
  }
}
