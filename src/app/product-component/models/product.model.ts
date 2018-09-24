export enum ProductCategory {
  WhiteTea = 'White Tea',
  YellowTea = 'Yellow Tea',
  RedTea = 'Red Tea',
  Oolong = 'Oolong',
  BlackTea = 'Black Tea'
}

export class Product {
  constructor(public name: string,
              public description: string,
              public price: number,
              public category: ProductCategory,
              public origin: string,
              public isAwailable: boolean,
              public isInStock: boolean) {
    this.isAwailable = isAwailable || false;
    this.isInStock = isInStock || false;
  }
}
