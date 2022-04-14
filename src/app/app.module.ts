import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductslistComponent } from './components/productslist/productslist.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductslistComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
