import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  bookings = [];
  constructor() { }

  addToCart(destination) {
    this.bookings.push(destination);
  }
 
  getItems() {
    return this.bookings;
  }
 
  clearCart() {
    this.bookings = [];
    return this.bookings;
  }
}
