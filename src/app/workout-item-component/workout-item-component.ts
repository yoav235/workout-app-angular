import { Component, Input, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface WorkoutSet {
  reps: number;
  weight: number;
  completed: boolean;
  intensity: number | null;
}

@Component({
  selector: 'app-workout-item-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './workout-item-component.html',
  styleUrl: './workout-item-component.css',
})
export class WorkoutItemComponent implements OnDestroy {
  @Input() exerciseName: string = 'Exercise Name';
  @Input() muscleGroups: string[] = [];

  comment: string = '';
  sets: WorkoutSet[] = [
    { reps: 0, weight: 0, completed: false, intensity: null }
  ];

  restDuration: number = 60;
  timeLeft = signal(0);
  isRunning = signal(false);
  private timerInterval: ReturnType<typeof setInterval> | null = null;

  addSet(): void {
    this.sets.push({ reps: 0, weight: 0, completed: false, intensity: null });
  }

  clampIntensity(set: WorkoutSet): void {
    if (set.intensity === null) return;
    if (set.intensity > 10) set.intensity = 10;
    if (set.intensity < 1) set.intensity = 1;
  }

  deleteSet(index: number): void {
    this.sets.splice(index, 1);
  }

  onSetCompleted(set: WorkoutSet): void {
    if (set.completed) {
      this.startTimer();
    }
  }

  stopTimer(): void {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = null;
    this.isRunning.set(false);
  }

  resetTimer(): void {
    this.stopTimer();
    this.timeLeft.set(0);
  }

  adjustTime(delta: number): void {
    if (this.isRunning()) {
      this.timeLeft.update(t => Math.max(1, t + delta));
    } else {
      this.restDuration = Math.max(10, this.restDuration + delta);
    }
  }

  private startTimer(): void {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timeLeft.set(this.restDuration);
    this.isRunning.set(true);
    this.timerInterval = setInterval(() => {
      this.timeLeft.update(t => t - 1);
      if (this.timeLeft() <= 0) {
        this.timeLeft.set(0);
        this.isRunning.set(false);
        clearInterval(this.timerInterval!);
        this.timerInterval = null;
      }
    }, 1000);
  }

  formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  ngOnDestroy(): void {
    if (this.timerInterval) clearInterval(this.timerInterval);
  }
}
