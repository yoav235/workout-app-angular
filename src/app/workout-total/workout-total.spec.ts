import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutTotal } from './workout-total';

describe('WorkoutTotal', () => {
  let component: WorkoutTotal;
  let fixture: ComponentFixture<WorkoutTotal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutTotal],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutTotal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
