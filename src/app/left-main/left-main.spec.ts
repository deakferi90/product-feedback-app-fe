import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMain } from './left-main';

describe('LeftMain', () => {
  let component: LeftMain;
  let fixture: ComponentFixture<LeftMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
