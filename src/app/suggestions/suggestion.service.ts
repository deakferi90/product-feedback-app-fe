import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SuggestionService {
  httpUrl: string = 'http://localhost:3000/api/feedback/productRequests';
  constructor(private http: HttpClient) {}

  getComments() {
    return this.http.get(this.httpUrl);
  }
}
