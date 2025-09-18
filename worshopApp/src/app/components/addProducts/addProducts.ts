import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  units: number;
}

@Component({
  selector: 'addProduct',
  templateUrl: './addProducts.html',
  standalone: false,
})
export class addProducts {
  // Define the server URL
  server = 'http://localhost:3000';

  // Define product object structure
  product: Product = {
    id: '',
    name: '',
    description: '',
    price: 0,
    units: 0
  };

  // Response message to show after submitting the form
  response: string = '';

  constructor(private httpService: HttpClient, private router: Router) {}

  // Handle form submission
  onSubmit(): void {
    console.log(this.product);
    // Make an HTTP POST request to add a new product
    this.httpService.post(`${this.server}/api/add`, this.product).pipe(
      map((response: any) => {
        // Check if the response is successful
        if (response.valid) {
          this.response = "Product has been added successfully!";
        } else {
          this.response = "Error adding product.";
        }
      }),
      catchError((error) => {
        // Handle any errors during the HTTP request
        console.error('Error adding product:', error);
        this.response = 'Error adding product. Please try again.';
        return of(null);  // Return null if there is an error
      })
    ).subscribe();  // Subscribe to trigger the HTTP request
  }
}
