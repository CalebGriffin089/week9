import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

interface Product {
  _id: string;
  id: string;
  name: string;
  description: string;
  price: string;
  units: string;
}


@Component({
  selector: 'updateProducts',
  templateUrl: './updateProducts.html',
  standalone: false,
})
export class updateProducts implements OnInit {
  server = 'http://localhost:3000'; 
  products: Product[] = [];  // Define products as an array of Product

  ngOnInit() {
    // Make an HTTP request to fetch all products
    this.httpService.post(`${this.server}/api/readAllProducts`, '').pipe(
      map((response: any) => {
        console.log(response);
        // Assuming response is an array of products, we update products array
        this.products = response;
      }),
      catchError((error) => {
        console.error('Error during request:', error);
        return error;
      })
    ).subscribe();  // Subscribe to trigger the HTTP request
  }




//    Update the product
  updateProduct(index: number) {
    const updatedProduct = this.products[index];
    // Perform your update logic here (e.g., send a request to your server)
    console.log('Updated Product:', updatedProduct);
    console.log(this.products[index]);
    this.httpService.post(`${this.server}/api/updateProduct`, this.products[index]).pipe(
      map((response: any) => {
      }),
      catchError((error) => {
        console.error('Error during login:', error);
        return of(null);  // Return null if there is an error
      })
    ).subscribe();  // Subscribe to trigger the HTTP request
  }

  // Delete a product
  deleteProduct(index: number) {

    this.httpService.post(`${this.server}/api/removeProduct`, this.products[index]).pipe(
      map((response: any) => {
      }),
      catchError((error) => {
        console.error('Error during login:', error);
        return of(null);  // Return null if there is an error
      })
    ).subscribe();  // Subscribe to trigger the HTTP request

    this.products.splice(index, 1); // Remove the product from the array
    // Optionally, send a request to the server to delete the product
    console.log('Deleted Product at index:', index);
  }



  constructor(private httpService: HttpClient, private router: Router) {}
}
