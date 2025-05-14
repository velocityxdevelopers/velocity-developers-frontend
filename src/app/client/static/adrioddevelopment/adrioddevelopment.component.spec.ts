import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdrioddevelopmentComponent } from './adrioddevelopment.component';

describe('AdrioddevelopmentComponent', () => {
  let component: AdrioddevelopmentComponent;
  let fixture: ComponentFixture<AdrioddevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdrioddevelopmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdrioddevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
