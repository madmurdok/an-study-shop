import {ProductInterface} from './product.interface';
import {ProductCategory} from '../../shared/enums';

export class Product implements ProductInterface {
  constructor (
    public name: string,
    public description: string,
    public price: number,
    public category: ProductCategory,
    public origin: string,
    public isAwailable: boolean,
    public isInStock: boolean
  ) {}
}
