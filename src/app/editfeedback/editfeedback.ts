import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SuggestionService } from '../suggestions/suggestion.service';
import { ProductRequest } from '../suggestions/suggestions.interface';
import { ActivatedRoute, Router } from '@angular/router';

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
  upArrow = 'assets/arrowup.svg';
  commentsBubble = 'assets/commentsBubble.svg';

  constructor(
    private route: ActivatedRoute,
    private suggestionService: SuggestionService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadFeedback(this.id);
  }

  loadFeedback(id: number) {
    this.suggestionService.getComments().subscribe((data: ProductRequest[]) => {
      this.feedback = data.find((item) => item.id === id);
      this.requestData = data;
      console.log('Loaded feedback:', this.feedback);
    });
  }

  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }
}
