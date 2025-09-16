import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { Add } from './components/add/add';
import { App } from './app';
import { Read } from './components/read/read';
import { Remove } from './components/remove/remove';
import { Update } from './components/update/update';
@NgModule({
  declarations: [
    Add,
    App,
    Read,
    Remove,
    Update
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