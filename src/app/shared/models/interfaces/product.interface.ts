import { ProductCategory } from '../../enums';

export interface ProductInterface {
  id: number;
  name: string;
  description?: string;
  price: number;
  category: ProductCategory;
  origin: string;
  isAwailable: boolean;
  isInStock: boolean;
}
