import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { CartItemModel } from '../models/cart-item.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public total: number;
  public cart: Object;
  private channel = new Subject<Object>();
  public channel$ = this.channel.asObservable();
  private totalChannel = new Subject<number>();
  public totalChannel$ = this.totalChannel.asObservable();

  constructor() {
    this.cart = [];
    this.total = 0;
  }

  putToCart(item: Product) {
    this.cart[item.name] = this.cart[item.name] || new CartItemModel(item.id, item.name, 0, item.price);
    this.cart[item.name]['quantity']++;
    console.log(item.price);
    this.total += item.price;
    this.notify();
  }

  removeFromCart(item) {
    if (this.cart[item.name]['quantity'] === 1) {
      delete this.cart[item.name];
    } else {
      this.cart[item.name]['quantity']--;
    }
    this.total -= item.price;
    this.notify();
  }

  updateQuantity(item) {
    this.cart[item.name]['quantity'] = item.quantity;
    this.total = this.getTotal();
    this.notify();
  }

  getTotal(): number {
    const keys = Object.keys(this.cart);
    let total = 0;
    for (const key of keys) {
      total += this.cart[key]['price'] * this.cart[key]['quantity'];
    }
    return total;
  }

  getCart() {
    return this.cart;
  }

  notify() {
    this.channel.next(this.getCart());
    this.totalChannel.next(this.total);
  }

  clear() {
    this.cart = [];
    this.total = 0;
    this.notify();
  }
}
