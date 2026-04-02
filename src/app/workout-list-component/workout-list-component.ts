import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkoutItemComponent } from '../workout-item-component/workout-item-component';

interface Workout {
  name: string;
  muscleGroups: string[];
}

@Component({
  selector: 'app-workout-list-component',
  imports: [WorkoutItemComponent, CommonModule, FormsModule],
  templateUrl: './workout-list-component.html',
  styleUrl: './workout-list-component.css',
})
export class WorkoutListComponent {
  workouts: Workout[] = [
    { name: 'Bench Press', muscleGroups: ['Chest'] }
  ];

  availableMuscleGroups: string[] = [
    'Chest', 'Back', 'Shoulders', 'Biceps', 'Triceps',
    'Quadriceps', 'Hamstrings', 'Glutes', 'Calves', 'Core', 'Forearms'
  ];

  showForm = false;
  newWorkoutName = '';
  selectedMuscleGroups: string[] = [];

  openForm(): void {
    this.showForm = true;
    this.newWorkoutName = '';
    this.selectedMuscleGroups = [];
  }

  closeForm(): void {
    this.showForm = false;
  }

  addWorkout(): void {
    if (!this.newWorkoutName.trim()) return;
    this.workouts.push({
      name: this.newWorkoutName.trim(),
      muscleGroups: [...this.selectedMuscleGroups]
    });
    this.closeForm();
  }
}
