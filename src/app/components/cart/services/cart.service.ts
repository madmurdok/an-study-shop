import { Injectable } from '@angular/core';
import { Product } from '../../../models/product.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart: Array<Product>;
  private channel = new Subject<String>();
  public channel$ = this.channel.asObservable();

  constructor() {
    this.cart = [];
  }

  putToCart(item: Product) {
    this.cart.push(item);
    this.notify();
  }

  getCart() {
    return this.cart;
  }

  getCartFormatted<String>() {
    return JSON.stringify(
      this.cart.reduce((memo, item) => {
        memo[item.name] = memo[item.name] || 0;
        memo[item.name]++;
        return memo;
      }, {})
    );
  }

  notify() {
    this.channel.next(this.getCartFormatted());
  }

  clear() {
    this.cart = [];
    this.notify();
  }
}
