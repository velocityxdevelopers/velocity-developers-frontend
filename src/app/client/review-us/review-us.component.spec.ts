import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewUsComponent } from './review-us.component';

describe('ReviewUsComponent', () => {
  let component: ReviewUsComponent;
  let fixture: ComponentFixture<ReviewUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
