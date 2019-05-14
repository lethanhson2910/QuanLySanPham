import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductManagermentModule } from './product-managerment/product-managerment.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductManagermentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
