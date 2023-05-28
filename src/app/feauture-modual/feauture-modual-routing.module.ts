import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: 'contactus',

  loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule),
 

},
 

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeautureModualRoutingModule { }
