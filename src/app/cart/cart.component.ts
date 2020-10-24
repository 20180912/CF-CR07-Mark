import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  destinations;
  //Initializing a variable for the total as well as the discounted total cost
  total = 0;
  discounted_total = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.destinations = this.cartService.getItems();
    //Adding up all reservations
    for (let i = 0; i < this.destinations.length; i++) {
      this.total += Number(this.destinations[i].price);
    }

    //Checking whether the total exceeds 500 or 200 and applying a bonus
    if (this.total >= 500) {
      this.discounted_total = this.total * 0.8;
      document.getElementById('total').innerHTML = "Your total is: " + this.discounted_total + "€ (incl. 20% discount)";
    } else if (this.total >= 200) {
      this.discounted_total = this.total * 0.9;
      document.getElementById('total').innerHTML = "Your total is: " + this.discounted_total + "€ (incl. 10% discount)";
    } else if (this.total != 0) {
      document.getElementById('total').innerHTML = "Your total is: " + this.total + "€";
    }
  }

  book() {
    window.alert('Your booking has been confirmed');
    this.destinations = this.cartService.clearCart();
    document.getElementById('total').innerHTML = "";
  }

}