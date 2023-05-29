import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  appSettings = {
    "settings": {
      "rtl": 1,
      "ltr": 0,

    }
  }
  partner_list = [
    
    
    {
      logo_att_name: '../../../assets/imag/home/carsol/partener_20.png'
    },
    {
      logo_att_name: '../../../assets/imag/home/carsol/partener_21.png'
    },
    {
      logo_att_name: '../../../assets/imag/home/carsol/partener_22.png'
    },
    {
      logo_att_name: '../../../assets/imag/home/carsol/partener_23.png'
    },
    {
      logo_att_name: '../../../assets/imag/home/carsol/partener_24.png'
    },
    {
      logo_att_name: '../../../assets/imag/home/carsol/partener_25.png'
    },
    {
      logo_att_name: '../../../assets/imag/home/carsol/partener_26.png'
    },
    {
      logo_att_name: '../../../assets/imag/home/carsol/partener_27.png'
    },
    {
      logo_att_name: '../../../assets/imag/home/carsol/partener_28.png'
    },
    {
      logo_att_name: '../../../assets/imag/home/carsol/partener_29.png'
    },
    


  ]




  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
   
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    margin: 5,
    

    dots: false,
    navSpeed: 700,
    navText: [
      
      "<i class='material-icons icons' >chevron_left</i>",
      "<i class='material-icons icons'>navigate_next</i>",

    ],

    responsive: {

      600: {
        items: 7
      }
    },
    nav: true
  }
}



