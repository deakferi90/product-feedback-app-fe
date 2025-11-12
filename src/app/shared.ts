import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedService {
  private selectedRequestSource = new BehaviorSubject<any>(null);
  selectedRequest$ = this.selectedRequestSource.asObservable();

  setSelectedRequest(data: any) {
    this.selectedRequestSource.next(data);
  }
}
