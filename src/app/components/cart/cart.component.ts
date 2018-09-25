import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from './services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  // cart: Array<Product>;
  cart: String;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.subscription = this.cartService.channel$.subscribe(
      data => this.cart = data
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  clearCart() {
    this.cartService.clear();
  }
}
