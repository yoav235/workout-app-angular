import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  showSignIn = false;
  username = '';
  password = '';

  constructor(private router: Router) {}

  openSignIn() {
    this.showSignIn = true;
  }

  closeSignIn() {
    this.showSignIn = false;
    this.username = '';
    this.password = '';
  }

  signIn() {
    this.router.navigate(['/ChooseWorkout']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
