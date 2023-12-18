import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Soaps, currentSoaps } from '../currentSoaps';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-soap-details',
  templateUrl: './soap-details.component.html',
  styleUrl: './soap-details.component.css',
})

export class SoapDetailsComponent implements OnInit {
  currentSoap: Soaps | undefined;
  addToCart(currentSoap: Soaps) {
    this.cartService.addToCart(currentSoap);
    window.alert('Your Candle has been added to the cart!');
  }
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.currentSoap = currentSoaps.find(
      (currentSoap) => currentSoap.id === productIdFromRoute
    );
  }
}
