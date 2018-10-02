import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent, ProductComponent } from './components';

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
