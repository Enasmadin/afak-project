import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeautureModualRoutingModule } from './feauture-modual-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductComponent } from './product/product.component';
import { GalaryComponent } from './galary/galary.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AboutUsComponent,
    ProductComponent,
    GalaryComponent
  ],
  imports: [
    CommonModule,
    FeautureModualRoutingModule,
    MatIconModule
  
  ],
  exports:[
    AboutUsComponent,
    ProductComponent,
    GalaryComponent
  ],
  providers: [
    
  ]
})
export class FeautureModualModule { }
