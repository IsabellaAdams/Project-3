import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { ProductListComponent } from './product-list/product-list.component';
import { BathbombsListComponent } from './bathbombs-list/bathbombs-list.component';
import { SoapListComponent } from './soap-list/soap-list.component';
import { CandlesListComponent } from './candles-list/candles-list.component';
import { UpcomingListComponent } from './upcoming-list/upcoming-list.component';

import { AlertsComponent } from './alerts/alerts.component';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { CandlesDetailsComponent } from './candles-details/candles-details.component';
import { BathbombsDetailsComponent } from './bathbombs-details/bathbombs-details.component';
import { SoapDetailsComponent } from './soap-details/soap-details.component';

import { ShippingComponent } from './shipping/shipping.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { FrontPageComponent } from './front-page/front-page.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: FrontPageComponent },
      { path: 'candles', component: CandlesListComponent },
      { path: 'bathbombs', component: BathbombsListComponent },
      { path: 'soaps', component: SoapListComponent },
      { path: 'upcoming', component: UpcomingListComponent },

      { path: 'products/:productId', component: ProductDetailsComponent },
      {
        path: 'currentBathbombs/:productId',
        component: BathbombsDetailsComponent,
      },
      { path: 'currentCandles/:productId', component: CandlesDetailsComponent },
      { path: 'currentSoaps/:productId', component: SoapDetailsComponent },

      { path: 'cart', component: ShoppingCartComponent },
      { path: 'shipping', component: ShippingComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    ShippingComponent,
    FrontPageComponent,
    CandlesListComponent,
    CandlesDetailsComponent,
    BathbombsListComponent,
    SoapListComponent,
    BathbombsDetailsComponent,
    SoapDetailsComponent,
    AlertsComponent,
    UpcomingListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
