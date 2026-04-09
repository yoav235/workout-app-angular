import { Injectable } from '@angular/core';

export interface Exercise {
  name: string;
  muscleGroups: string[];
}

export interface WorkoutPlan {
  id: number;
  name: string;
  muscleGroups: string[];
  exercises: Exercise[];
}

@Injectable({ providedIn: 'root' })
export class WorkoutService {
  private nextId = 3;

  plans: WorkoutPlan[] = [
    {
      id: 1,
      name: 'Push Day',
      muscleGroups: ['Chest', 'Shoulders', 'Triceps'],
      exercises: [{ name: 'Bench Press', muscleGroups: ['Chest'] }]
    },
    {
      id: 2,
      name: 'Leg Day',
      muscleGroups: ['Quadriceps', 'Hamstrings', 'Glutes', 'Calves'],
      exercises: []
    }
  ];

  activePlan: WorkoutPlan | null = null;

  createPlan(): void {
    const plan: WorkoutPlan = {
      id: this.nextId++,
      name: 'New Workout',
      muscleGroups: [],
      exercises: []
    };
    this.plans.push(plan);
    this.activePlan = plan;
  }

  deletePlan(id: number): void {
    this.plans = this.plans.filter(p => p.id !== id);
    if (this.activePlan?.id === id) {
      this.activePlan = null;
    }
  }

  setActivePlan(plan: WorkoutPlan): void {
    this.activePlan = plan;
  }
}
