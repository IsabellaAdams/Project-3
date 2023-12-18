import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { currentBathbombs, Bathbombs } from '../currentBathbombs';

@Component({
  selector: 'app-bathbombs-details',
  templateUrl: './bathbombs-details.component.html',
  styleUrl: './bathbombs-details.component.css',
})
export class BathbombsDetailsComponent implements OnInit {
  currentBathbomb: Bathbombs | undefined;
  addToCart(currentBathbomb: Bathbombs) {
    this.cartService.addToCart(currentBathbomb);
    window.alert('Your Bath Bomb has been added to the cart!');
  }
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.currentBathbomb = currentBathbombs.find(
      (currentBathbomb) => currentBathbomb.id === productIdFromRoute
    );
  }
}
