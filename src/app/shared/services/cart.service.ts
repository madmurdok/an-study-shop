import { Injectable } from '@angular/core';

import { CartItemModel, Product } from '../models';
import { CartMapInterface } from '../models/interfaces/cart-map.interface';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public totalPrice = 0;
  public totalCount = 0;
  public cart: CartMapInterface = {};
  private channel = new Subject<Object>();
  public channel$ = this.channel.asObservable();
  private totalChannel = new Subject<{ price: number, count: number }>();
  public totalChannel$ = this.totalChannel.asObservable();

  constructor() {

  }

  putToCart(item: Product, quantity: number = 1) {
    this.cart[item.name] = this.cart[item.name] || new CartItemModel(item.id, item.name, 0, item.price);
    this.cart[item.name]['quantity'] += quantity;
    this.increaseTotals(item.price, quantity);
    this.notify();
  }

  removeFromCart(item: Product, quantity: number = 1) {
    if (this.cart[item.name]['quantity'] === 1) {
      delete this.cart[item.name];
      this.decreaseTotals(item.price, 1);
    } else {
      this.cart[item.name]['quantity'] -= quantity;
      this.decreaseTotals(item.price, quantity);
    }
    this.notify();
  }

  updateQuantity(item) {
    this.cart[item.name]['quantity'] = item.quantity;
    const keys = Object.keys(this.cart);
    for (const key of keys) {
      this.totalPrice += this.cart[key]['price'] * this.cart[key]['quantity'];
      this.totalCount += this.cart[key]['quantity'];
    }
    this.notify();
  }

  ping() {
    this.notify();
  }

  increaseTotals(price: number, quantity: number) {
    this.totalPrice += (price * quantity);
    this.totalCount += quantity;
  }

  decreaseTotals(price: number, quantity: number) {
    this.totalPrice -= (price * quantity);
    this.totalCount -= quantity;
  }

  getCart() {
    return this.cart;
  }

  notify() {
    this.channel.next(this.getCart());
    this.totalChannel.next({price: this.totalPrice, count: this.totalCount});
  }

  clear() {
    this.cart = {};
    this.totalPrice = 0;
    this.totalCount = 0;
    this.notify();
  }
}
