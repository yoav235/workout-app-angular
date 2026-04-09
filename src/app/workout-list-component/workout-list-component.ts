import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkoutItemComponent } from '../workout-item-component/workout-item-component';
import { Router } from '@angular/router';
import { WorkoutService, Exercise } from '../workout.service';

@Component({
  selector: 'app-workout-list-component',
  imports: [WorkoutItemComponent, CommonModule, FormsModule],
  templateUrl: './workout-list-component.html',
  styleUrl: './workout-list-component.css',
})
export class WorkoutListComponent {
  availableMuscleGroups: string[] = [
    'Chest', 'Back', 'Shoulders', 'Biceps', 'Triceps',
    'Quadriceps', 'Hamstrings', 'Glutes', 'Calves', 'Core', 'Forearms'
  ];

  showForm = false;
  newWorkoutName = '';
  selectedMuscleGroups: string[] = [];

  constructor(public workoutService: WorkoutService, private router: Router) {}

  exitWorkout(): void {
    this.router.navigate(['/ChooseWorkout']);
  }

  get exercises(): Exercise[] {
    return this.workoutService.activePlan?.exercises ?? [];
  }

  get planName(): string {
    return this.workoutService.activePlan?.name ?? 'Workout';
  }

  openForm(): void {
    this.showForm = true;
    this.newWorkoutName = '';
    this.selectedMuscleGroups = [];
  }

  closeForm(): void {
    this.showForm = false;
  }

  addWorkout(): void {
    if (!this.newWorkoutName.trim() || !this.workoutService.activePlan) return;
    this.workoutService.activePlan.exercises.push({
      name: this.newWorkoutName.trim(),
      muscleGroups: [...this.selectedMuscleGroups]
    });
    this.closeForm();
  }
}
