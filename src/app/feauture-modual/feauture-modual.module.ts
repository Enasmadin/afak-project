import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeautureModualRoutingModule } from './feauture-modual-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductComponent } from './product/product.component';
import { GalaryComponent } from './galary/galary.component';
import {MatIconModule} from '@angular/material/icon';
import { PartenerComponent } from './partener/partener.component';
import { SharedModule } from '../shared/shared.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';





@NgModule({
  declarations: [
    AboutUsComponent,
    ProductComponent,
    GalaryComponent,
    PartenerComponent
  ],
  imports: [
    CommonModule,
    FeautureModualRoutingModule,
    MatIconModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule
  
  ],
  exports:[
    AboutUsComponent,
    ProductComponent,
    GalaryComponent,
    PartenerComponent,
    ContactUsModule
   
  ],
  providers: [
    
  ]
})
export class FeautureModualModule { }
