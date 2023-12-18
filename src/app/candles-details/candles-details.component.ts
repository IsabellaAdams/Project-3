import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Candles, currentCandles } from '../currentCandles';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-candles-details',
  templateUrl: './candles-details.component.html',
  styleUrl: './candles-details.component.css',
})
export class CandlesDetailsComponent implements OnInit {
  currentCandle: Candles | undefined;
  addToCart(currentCandle: Candles) {
    this.cartService.addToCart(currentCandle);
    window.alert('Your Candle has been added to the cart!');
  }
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.currentCandle = currentCandles.find(
      (currentCandle) => currentCandle.id === productIdFromRoute
    );
  }
}
