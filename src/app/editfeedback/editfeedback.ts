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
  maxChars: number = 250;
  charactersLeft = this.maxChars;
  comments: Comment[] = [];
  productRequest: ProductRequest | null = null;

  constructor(
    private route: ActivatedRoute,
    private suggestionService: SuggestionService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.suggestionService.getProductRequestById(this.id).subscribe({
      next: (data) => {
        this.productRequest = data;
      },
      error: (err) => console.error(err),
    });
    this.loadFeedback(this.id);
  }

  loadFeedback(id: number) {
    this.suggestionService.getComments().subscribe((data: ProductRequest[]) => {
      this.feedback = data.find((item) => item.id === id);
    });
  }

  postComment(val: string, productId: number) {
    if (!val || val.trim() === '') return;

    this.suggestionService.postComment({ content: val, productId }).subscribe({
      next: (res: any) => {
        console.log('Updated product request:', res.updatedRequest);

        this.productRequest = res.updatedRequest;
        this.comments = [...res.updatedRequest.comments];
      },
      error: (err) => console.error('Error posting comment:', err),
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
