import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions  } from '@angular/router';
// import { AuthGuard, CustomPreloadingStrategyService } from './core';

import { PathNotFoundComponent, LoginComponent, ItemDescriptionComponent, OrderComponent  } from './layout/components';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  // {
  //   path: 'admin',
  //   canLoad: [AuthGuard],
  //   loadChildren: './admin/admin.module#AdminModule',
  //   data: { title: 'Admin' }
  // },
  // {
  //   path: 'order',
  //   loadChildren: './users/users.module#UsersModule',
  //   data: { preload: true, title: 'Order'}
  // },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'item-description',
    component: ItemDescriptionComponent,
    outlet: 'item-desc'
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: PathNotFoundComponent,
    data: { title: 'Page Not Found' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
