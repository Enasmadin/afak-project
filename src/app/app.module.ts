import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './layouts/full-components/home/home.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeautureModualModule } from './feauture-modual/feauture-modual.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedModule } from './shared/shared.module';
import { ContactUsModule } from './feauture-modual/contact-us/contact-us.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContausPageComponent } from './layouts/full-components/contaus-page/contaus-page.component';





@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponent,
         ContausPageComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
   
    MatButtonToggleModule,
    BrowserAnimationsModule,
    FeautureModualModule,
    FlexLayoutModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
