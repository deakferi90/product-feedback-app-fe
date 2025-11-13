import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SuggestionService } from '../suggestions/suggestion.service';
import { ProductRequest, Reply } from '../suggestions/suggestions.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editfeedback',
  imports: [CommonModule],
  templateUrl: './editfeedback.html',
  styleUrl: './editfeedback.scss',
})
export class Editfeedback implements OnInit {
  id!: number;
  feedback?: ProductRequest;
  upArrow = 'assets/arrowup.svg';
  commentsBubble = 'assets/commentsBubble.svg';
  replies: Reply[] | undefined = [];

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
      console.log(
        this.feedback?.comments?.forEach((comment) => {
          console.log(comment?.replies);
          this.replies = comment?.replies;
        })
      );
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
