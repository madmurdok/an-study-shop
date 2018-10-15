import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent, ProductComponent } from './components';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
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
