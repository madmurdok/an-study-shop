import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { ProductsService } from './services/products.service';
import { CartService } from '../cart/services/cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public products: Array<Product>;
  // public cart: Array<Product>;
  public title: string;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.title = 'List of products';
    this.products = this.productsService.getProducts();
    // this.cart = [];
  }

  onBuyItem(item) {
    console.log('We bought item:', JSON.stringify(item));
  }

  onAddToCartItem(item) {
    this.cartService.putToCart(item);
    //this.cart.push(item);
    console.log('Items in cart:', this.cartService.getCartFormatted());
  }

  // getCart() {
  //   return JSON.stringify(
  //     this.cart.reduce((memo, item) => {
  //       memo[item.name] = memo[item.name] || 0;
  //       memo[item.name]++;
  //       return memo;
  //     }, {})
  //   );
  // }

}
