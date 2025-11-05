import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftMain } from './left-main/left-main';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LeftMain],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('product-feedback');
  ovalImage: string = 'assets/Oval.png';
}
