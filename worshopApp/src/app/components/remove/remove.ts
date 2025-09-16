import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'remove',
  templateUrl: './remove.html',
  standalone: false,
})
export class Remove {
  server = 'http://localhost:3000'; 
  user = {
    id: 0
  }
  response = '';
  constructor(private httpService: HttpClient, private router: Router) {}

  onSubmit(): void {
    this.httpService.post(`${this.server}/api/removeProduct`, this.user).pipe(
      map((response: any) => {
        // Check if response is valid
        if (response.valid) {
          this.response = "Data has been added";

        } else {
          this.response = "Error adding data";
        }
      }),
      catchError((error) => {
        console.error('Error during login:', error);
        return of(null);  // Return null if there is an error
      })
    ).subscribe();  // Subscribe to trigger the HTTP request
  }
}