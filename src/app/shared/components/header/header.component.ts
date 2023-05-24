import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showHeader:boolean = true;
  
  toggleHeader() {
    this.showHeader = !this.showHeader;
  }

}
