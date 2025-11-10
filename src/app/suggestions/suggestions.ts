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
  upArrow = 'assets/arrowup.svg';
  magnifying = 'assets/person-magnifying.png';
  commentsBubble = 'assets/commentsBubble.svg';
  addingFeedback = true;
  comments: any = [];

  constructor(private suggestionService: SuggestionService) {}

  ngOnInit(): void {
    this.displayData();
  }

  displayData() {
    this.suggestionService.getComments().subscribe((data) => {
      this.comments = data;
      console.log(this.comments);
    });
  }

  addFeedback() {
    this.addingFeedback = false;
  }
}
