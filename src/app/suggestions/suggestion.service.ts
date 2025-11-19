import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductRequest } from './suggestions.interface';

@Injectable({
  providedIn: 'root',
})
export class SuggestionService {
  httpUrl: string = 'http://localhost:3000/api/feedback/productRequests';
  constructor(private http: HttpClient) {}

  getComments() {
    return this.http.get<ProductRequest[]>(this.httpUrl);
  }

  getProductRequestById(id: number) {
    return this.http.get<ProductRequest>(`${this.httpUrl}/${id}`);
  }

  postComment(commentData: { content: string; productId: number }) {
    return this.http.post<{ message: string; updatedRequest: any }>(
      this.httpUrl,
      commentData
    );
  }
}
