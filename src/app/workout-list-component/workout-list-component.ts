import { Component } from '@angular/core';
import { WorkoutItemComponent } from '../workout-item-component/workout-item-component';

@Component({
  selector: 'app-workout-list-component',
  imports: [WorkoutItemComponent],
  templateUrl: './workout-list-component.html',
  styleUrl: './workout-list-component.css',
})
export class WorkoutListComponent { }
