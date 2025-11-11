import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SuggestionService } from './suggestion.service';

describe('SuggestionService', () => {
  let service: SuggestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(SuggestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
