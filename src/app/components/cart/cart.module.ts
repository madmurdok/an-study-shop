import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule {
}
