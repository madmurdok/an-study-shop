import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() buyItem: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit() {
  }

  onBuyItem(current) {
    this.buyItem.emit(current);
  }

  onAddToCartItem(current) {
    this.addToCart.emit(current);
  }

}
