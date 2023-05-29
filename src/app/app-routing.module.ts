import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/full-components/home/home.component';
import { ContactUsComponent } from './feauture-modual/contact-us/contact-us/contact-us.component';
import { ContausPageComponent } from './layouts/full-components/contaus-page/contaus-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component:HomeComponent   },
  
  { path: 'contact-us',  component:ContausPageComponent  },
 
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
