import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginTestComponent } from './login-test/login-test.component';

import { AngularFireModule } from 'angularfire2';
import { config } from '../environments/firebase.config';
import { AngularFireAuth } from 'angularfire2/auth';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { ItemComponent } from './test2/item/item.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product-list/product/product.component';
import { ProductsComponent } from './products/products.component';
import { FiltersComponent } from './products/filters/filters.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginTestComponent,
    TestComponent,
    Test2Component,
    ItemComponent,
    ProductListComponent,
    ProductComponent,
    ProductsComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
