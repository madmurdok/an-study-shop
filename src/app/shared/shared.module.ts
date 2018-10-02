import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetBackgroundDirective, HostClickDirective } from './directives';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SetBackgroundDirective,
    HostClickDirective
  ],
  exports: [
    SetBackgroundDirective,
    HostClickDirective
  ]
})
export class SharedModule {
}
