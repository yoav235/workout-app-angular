import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { RegisterComponent } from './register/register';
import { WorkoutListComponent } from './workout-list-component/workout-list-component';
import { ChooseWorkoutComponent } from './choose-workout/choose-workout';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ChooseWorkout', component: ChooseWorkoutComponent },
  { path: 'workout', component: WorkoutListComponent },
  { path: 'register', component: RegisterComponent },
];
