import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathNotFoundComponent, LoginComponent, ItemDescriptionComponent, OrderComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PathNotFoundComponent, LoginComponent, OrderComponent, ItemDescriptionComponent]
})
export class LayoutModule { }
