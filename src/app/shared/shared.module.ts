import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    
  
  CarouselModule,


  ],
  exports:[
    CarouselComponent
  ]
})
export class SharedModule { }
