import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models';
import { ProductsService } from '../../services';
import { CartService } from '../../../shared/services';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public products: Array<Product>;
  public title: string;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.title = 'List of products';
    this.products = this.productsService.getProducts();
  }

  onBuyItem(item) {
    console.log('We bought item:', JSON.stringify(item));
  }

  onAddToCartItem(item) {
    this.cartService.putToCart(item);
    console.log('Items in cart:', this.cartService.getCart());
  }
}
