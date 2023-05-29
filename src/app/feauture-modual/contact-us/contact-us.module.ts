import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ContatUsPageComponent } from './page/contat-us-page/contat-us-page.component';
import { FeautureModualModule } from '../feauture-modual.module';
import { PartenerComponent } from '../partener/partener.component';



@NgModule({
  declarations: [
    ContactUsComponent,
    ContatUsPageComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatCheckboxModule,
    SharedModule,
    RouterModule,
  
 
    
    
  ],

  exports:[
    ContactUsComponent,
    MatFormFieldModule,
    MatInputModule,

  ]
})
export class ContactUsModule { }
