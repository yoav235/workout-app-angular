import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface WorkoutSet {
  reps: number;
  weight: number;
  completed: boolean;
  change_weight: 'up' | 'down' | '-';
}

@Component({
  selector: 'app-workout-item-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './workout-item-component.html',
  styleUrl: './workout-item-component.css',
})
export class WorkoutItemComponent {
  @Input() exerciseName: string = 'Exercise Name';

  comment: string = '';
  sets: WorkoutSet[] = [
    { reps: 0, weight: 0, completed: false, change_weight: '-' }
  ];

  addSet(): void {
    this.sets.push({ reps: 0, weight: 0, completed: false, change_weight: '-' });
  }

  deleteSet(index: number): void {
    this.sets.splice(index, 1);
  }
}
