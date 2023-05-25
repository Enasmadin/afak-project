import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeautureModualRoutingModule } from './feauture-modual-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    FeautureModualRoutingModule
  ],
  exports:[
    AboutUsComponent,
    ProductComponent
  ]
})
export class FeautureModualModule { }
