import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductsModule } from './components/products/products.module';
import { CartModule } from './components/cart/cart.module';
import { OrdersModule } from './components/orders/orders.module';
import { CoreModule } from './components/core/core.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CartModule,
    OrdersModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
