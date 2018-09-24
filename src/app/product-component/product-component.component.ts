import {Component, OnInit} from '@angular/core';
import {Product} from './models/product.model';
import {ProductsService} from './services/products-service.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})

export class ProductComponent implements OnInit {

  public products: Array<Product>;
  public cart: Array<Product>;
  public title: string;

  constructor(
    private productsService: ProductsService
  ) {
  }

  ngOnInit() {
    this.title = 'List of products';
    this.products = this.productsService.getProducts();
    this.cart = [];
  }

  onBuyItem(item) {
    console.log('We bought item:', JSON.stringify(item));
  }

  onAddToCartItem(item) {
    this.cart.push(item);
    console.log('Items in cart:', this.getCart());
  }

  getCart() {
    return JSON.stringify(
      this.cart.reduce((memo, item) => {
        memo[item.name] = memo[item.name] || 0;
        memo[item.name]++;
        return memo;
      }, {})
    );
  }
}
