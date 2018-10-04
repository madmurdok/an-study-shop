import { Injectable } from '@angular/core';
import { Product, ProductCategory } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts (): Promise<Array<Product>> {
    return new Promise((resolve) => {
      setTimeout(() => {
          resolve([
          new Product(1, 'Siberian tea', 15, ProductCategory.BlackTea, 'Georgia', true, true, 'Extra mix for Siberian guys'),
          new Product(2, 'Milk oolong', 45, ProductCategory.Oolong, 'China', true, true, 'Strange tea for those who love milk'),
          new Product(3, 'Rooibos', 35, ProductCategory.RedTea, 'Taiwan', false, true),
          new Product(4, 'Bamboo Leaf', 23, ProductCategory.GreenTea, 'Japan', true, true),
          new Product(5, 'Candy Apple White', 12, ProductCategory.WhiteTea, 'Shri-Lanka', true, true)
        ]);
      }, 2000);
    });
  }
}
