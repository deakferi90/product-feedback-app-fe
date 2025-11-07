import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestionService } from './suggestion.service';

@Component({
  selector: 'app-suggestions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suggestions.html',
  styleUrls: ['./suggestions.scss'],
})
export class Suggestions implements OnInit {
  bulbTwoImage = 'assets/bulb-2.png';
  arrowDown = 'assets/arrow.svg';
  magnifying = 'assets/person-magnifying.png';
  addingFeedback = false;

  constructor(private suggestionService: SuggestionService) {}

  ngOnInit(): void {
    this.displayData();
  }

  displayData() {
    this.suggestionService.getComments().subscribe((data) => {
      console.log('this is the array of requests', data);
    });
  }

  addFeedback() {
    this.addingFeedback = true;
  }
}
