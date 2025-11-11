import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Suggestions } from './suggestions';

describe('Suggestions', () => {
  let component: Suggestions;
  let fixture: ComponentFixture<Suggestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Suggestions, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Suggestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
