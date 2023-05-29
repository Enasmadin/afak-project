import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  
  @Input()
  hideTitle!: boolean;
  ngOnInit(): void {
     console.log(this.hideTitle)
  }
  
  
}
