import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
// import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../../../services/products.service';
import { CartService } from '../../../services/cart.service';

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
