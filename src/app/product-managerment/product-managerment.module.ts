import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagermentComponent } from './product-managerment.component';

@NgModule({
  declarations: [ProductManagermentComponent],
  exports: [ProductManagermentComponent],
  imports: [
    CommonModule
  ]
})
export class ProductManagermentModule { }
