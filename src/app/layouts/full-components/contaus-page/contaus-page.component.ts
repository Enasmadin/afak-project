import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contaus-page',
  templateUrl: './contaus-page.component.html',
  styleUrls: ['./contaus-page.component.scss']
})
export class ContausPageComponent  implements OnInit{
  hideTitle!:boolean;
  ngOnInit(): void {
    this.hideTitle=false
  }
 
  
}
