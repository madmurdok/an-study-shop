import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductsListComponent,
    ProductComponent
  ],
  exports: [
    ProductsListComponent
  ]
})
export class ProductsModule { }
