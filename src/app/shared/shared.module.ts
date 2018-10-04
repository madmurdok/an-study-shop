import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetBackgroundDirective, HostClickDirective } from './directives';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SetBackgroundDirective,
    HostClickDirective,
    OrderByPipe
  ],
  exports: [
    SetBackgroundDirective,
    HostClickDirective
  ]
})
export class SharedModule {
}
