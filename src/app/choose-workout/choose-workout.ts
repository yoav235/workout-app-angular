import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { WorkoutService, WorkoutPlan } from '../workout.service';

@Component({
  selector: 'app-choose-workout',
  imports: [CommonModule],
  templateUrl: './choose-workout.html',
  styleUrl: './choose-workout.css'
})
export class ChooseWorkoutComponent {
  deletingPlanId: number | null = null;

  constructor(public workoutService: WorkoutService, private router: Router) {}

  get plans(): WorkoutPlan[] {
    return this.workoutService.plans;
  }

  selectPlan(plan: WorkoutPlan): void {
    this.workoutService.setActivePlan(plan);
    this.router.navigate(['/workout']);
  }

  createNew(): void {
    this.workoutService.createPlan();
    this.router.navigate(['/workout']);
  }

  signOut(): void {
    this.router.navigate(['/home']);
  }

  promptDelete(event: MouseEvent, id: number): void {
    event.stopPropagation();
    this.deletingPlanId = id;
  }

  confirmDelete(): void {
    if (this.deletingPlanId !== null) {
      this.workoutService.deletePlan(this.deletingPlanId);
      this.deletingPlanId = null;
    }
  }

  cancelDelete(): void {
    this.deletingPlanId = null;
  }
}
