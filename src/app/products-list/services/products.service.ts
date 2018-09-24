import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductCategory} from '../../shared/enums';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts () {
    return [
      new Product('Siberian tea', 'Extra mix for Siberian guys', 15, ProductCategory.BlackTea, 'Georgia', true, true),
      new Product('Milk oolong', 'Strange tea for those who love milk', 45, ProductCategory.Oolong, 'China', true, true)
    ];
  }
}
