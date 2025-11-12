import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestionService } from './suggestion.service';
import { ProductRequest } from './suggestions.interface';
import { Router } from '@angular/router';

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
  dataRequest: ProductRequest[] = [];
  hideSuggestions: boolean = true;

  @Output() commentsClicked = new EventEmitter<void>();

  constructor(
    private suggestionService: SuggestionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.displayData();
  }

  displayData() {
    this.suggestionService.getComments().subscribe((data: ProductRequest[]) => {
      this.dataRequest = data;
    });
  }

  addFeedback() {
    this.addingFeedback = false;
  }

  showComments() {
    this.commentsClicked.emit();
    this.router.navigate(['/edit-feedback']);
  }
}
