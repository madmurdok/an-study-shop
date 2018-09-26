import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CartItemModel } from '../../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItemModel;
  @Output() decrement: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();
  @Output() increment: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

  constructor() {
  }

  ngOnInit() {
  }

  incrementQuantity(cartItem) {
      this.increment.emit(cartItem);
  }
  decrementQuantity(cartItem) {
      this.decrement.emit(cartItem);
  }

}
