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
}
