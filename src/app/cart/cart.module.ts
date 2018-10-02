import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CartItemComponent, CartListComponent} from './components';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule {
}
