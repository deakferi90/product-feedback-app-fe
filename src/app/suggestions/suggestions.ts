import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestionService } from './suggestion.service';
import { ProductRequest } from './suggestions.interface';
import { Router } from '@angular/router';
import { SharedService } from '../shared';

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

  @Output() openEditFeedback = new EventEmitter<number>();

  constructor(
    private suggestionService: SuggestionService,
    private router: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.displayData();
  }

  displayData() {
    this.suggestionService.getComments().subscribe((data: ProductRequest[]) => {
      this.dataRequest = data;
      console.log(this.dataRequest.length);
    });
  }

  addFeedback() {
    this.addingFeedback = false;
  }

  showComments(dataReq: { id: number }) {
    this.router.navigate(['/edit-feedback', dataReq.id]);
    this.sharedService.setSelectedRequest(dataReq);
    this.openEditFeedback.emit(dataReq.id);
  }
}
