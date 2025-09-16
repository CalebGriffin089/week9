import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css']
})
export class App {
  constructor(private router: Router) {}
  isSuperAdmin =true;
  logout() {
    localStorage.clear(); 
    this.router.navigate(['/']); 
  }
}