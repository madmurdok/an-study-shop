import {ProductInterface} from './interfaces/product.interface';
import {ProductCategory} from '../enums';

export class Product implements ProductInterface {
  constructor (
    public id,
    public name: string,
    public price: number,
    public category: ProductCategory,
    public origin: string,
    public isAwailable: boolean,
    public isInStock: boolean,
    public description?: string
  ) {
    this.description = description || 'The are no additional information about this field';
  }
}
