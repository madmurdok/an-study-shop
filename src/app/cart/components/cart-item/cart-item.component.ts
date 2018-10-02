import { Component, Input, Output, OnInit, OnChanges, EventEmitter } from '@angular/core';
import { CartItemModel } from '../../../shared/models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  //  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit, OnChanges {
  @Input() item: CartItemModel;
  @Output() decrement: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();
  @Output() increment: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();
  @Output() update: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges () {
    console.log('check!');
  }

  onChange() { // fires 2 times? why?
    this.update.emit(this.item);
  }

  incrementQuantity(cartItem) {
      this.increment.emit(cartItem);
  }
  decrementQuantity(cartItem) {
      this.decrement.emit(cartItem);
  }

}
