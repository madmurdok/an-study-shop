import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../../shared/services';
import { OrderByPipe } from '../../../shared/pipes/order-by.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  providers: [OrderByPipe]
})
export class CartListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private totalSub: Subscription;
  cartItems: Object = {};
  totals: {price: number, count: number} = {price: 0, count: 0};
  public sort = {
    type: 'name',
    order: 'asc'
  };

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.subscription = this.cartService.channel$.subscribe(
      data => {
        console.log(data);
        this.cartItems = data;
      }
    );
    this.totalSub = this.cartService.totalChannel$.subscribe(
      data => {
        console.log(this.totals);
        this.totals = data;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.totalSub.unsubscribe();
  }
  triggerChange(key, value) {
    console.log(key, value);
    this.sort[key] = value;
    this.cartService.ping();
  }

  clearCart() {
    this.cartService.clear();
  }

  increment(item) {
    this.cartService.putToCart(item);
  }

  decrement(item) {
    this.cartService.removeFromCart(item);
  }

  update(item) {
    this.cartService.updateQuantity(item);
  }
}
