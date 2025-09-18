import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { addProducts } from './components/addProducts/addProducts';
import { App } from './app';
import { Products } from './components/products/products';
import { Remove } from './components/remove/remove';
import { updateProducts } from './components/updateProducts/updateProducts';
@NgModule({
  declarations: [
    addProducts,
    App,
    Products,
    Remove,
    updateProducts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }