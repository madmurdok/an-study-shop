import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetBackgroundDirective } from '../../directives/set-background.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SetBackgroundDirective
  ],
  exports: [
    SetBackgroundDirective
  ]
})
export class SharedModule {
}
