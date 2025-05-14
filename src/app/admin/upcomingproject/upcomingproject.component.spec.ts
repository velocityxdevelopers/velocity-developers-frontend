import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingprojectComponent } from './upcomingproject.component';

describe('UpcomingprojectComponent', () => {
  let component: UpcomingprojectComponent;
  let fixture: ComponentFixture<UpcomingprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpcomingprojectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
