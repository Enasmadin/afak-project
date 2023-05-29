import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
   
   RouterModule,
    CarouselModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,


  ],
  exports:[
    CarouselComponent, HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
