import { Component, Input, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() buyItem: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();
  isHover = false;

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

  @HostListener('mouseenter')
  onMouseEnter () {
    this.isHover = true;
  }
  @HostListener('mouseleave')
  onMouseLeave () {
    this.isHover = false;
  }

}
