import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingprojectsComponent } from './upcomingprojects.component';

describe('UpcomingprojectsComponent', () => {
  let component: UpcomingprojectsComponent;
  let fixture: ComponentFixture<UpcomingprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpcomingprojectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
