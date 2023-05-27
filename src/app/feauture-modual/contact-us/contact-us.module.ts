import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
    
    
  ],

  exports:[
    ContactUsComponent,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ContactUsModule { }
