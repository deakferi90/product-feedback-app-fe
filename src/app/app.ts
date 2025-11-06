import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftMain } from './left-main/left-main';
import { Suggestions } from './suggestions/suggestions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LeftMain, Suggestions],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('product-feedback');
  ovalImage: string = 'assets/Oval.png';
}
