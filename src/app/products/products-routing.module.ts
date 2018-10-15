import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsListComponent } from './components';

const routes: Routes = [
  {
    path: 'home',
    component: ProductsListComponent,
    data: {
      title: 'Products list',
      meta: [{
        name: 'description',
        content: 'Products management application'
      },
      {
        name: 'keywords',
        content: 'Tea, Green Tea, Oolong, Black Tea'
      }]
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
