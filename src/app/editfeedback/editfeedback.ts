import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SuggestionService } from '../suggestions/suggestion.service';
import { ProductRequest } from '../suggestions/suggestions.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editfeedback',
  imports: [CommonModule],
  templateUrl: './editfeedback.html',
  styleUrl: './editfeedback.scss',
})
export class Editfeedback implements OnInit {
  id!: number;
  requestData: object[] | any;
  feedback?: ProductRequest;

  constructor(
    private route: ActivatedRoute,
    private suggestionService: SuggestionService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadFeedback(this.id);
  }

  loadFeedback(id: number) {
    this.suggestionService.getComments().subscribe((data: ProductRequest[]) => {
      this.feedback = data.find((item) => item.id === id);
      console.log('Loaded feedback:', this.feedback);
    });
  }
}
