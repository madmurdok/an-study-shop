import {ProductCategory} from '../../shared/enums';

export interface ProductInterface {
  name: string,
  description: string,
  price: number,
  category: ProductCategory,
  origin: string,
  isAwailable: boolean,
  isInStock: boolean
}
