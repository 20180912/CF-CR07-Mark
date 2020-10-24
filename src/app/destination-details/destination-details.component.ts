import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { travels } from '../travels';

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.css']
})
export class DestinationDetailsComponent implements OnInit {
  destination;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

addToCart(destination) {
  window.alert('Your reservation has been accepted');
  this.cartService.addToCart(destination);
}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.destination = travels[+params.get('destinationId')];
    });

  }
}