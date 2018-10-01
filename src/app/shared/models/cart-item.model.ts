import { CartItemInterface } from './interfaces/cart.interface';

export class CartItemModel implements CartItemInterface {
  constructor (
    public id: number,
    public name: string,
    public quantity: number,
    public price: number
  ) {
  }
}
