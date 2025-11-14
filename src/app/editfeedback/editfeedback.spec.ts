import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Editfeedback } from './editfeedback';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('Editfeedback', () => {
  let component: Editfeedback;
  let fixture: ComponentFixture<Editfeedback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Editfeedback],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            // mock whatever your component uses, e.g., params or snapshot
            params: of({ id: 123 }),
            snapshot: {
              paramMap: {
                get: (key: string) => '123',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Editfeedback);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
