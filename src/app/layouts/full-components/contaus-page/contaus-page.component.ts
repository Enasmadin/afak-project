import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contaus-page',
  templateUrl: './contaus-page.component.html',
  styleUrls: ['./contaus-page.component.scss']
})
export class ContausPageComponent  implements OnInit{
  hideTitle!:boolean;
  constructor(private title: Title){}
  ngOnInit(): void {
    this.hideTitle=false;
    this.title.setTitle("contact-us");
  }
 
  
}
