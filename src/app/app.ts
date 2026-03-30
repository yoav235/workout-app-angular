import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkoutListComponent } from './workout-list-component/workout-list-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WorkoutListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('yoav\'s project');
}
