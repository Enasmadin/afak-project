import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/full-components/home/home.component';


const routes: Routes = [
  { path: '',
  component:HomeComponent,

  loadChildren: () => import('./feauture-modual/feauture-modual.module').then(m => m.FeautureModualModule),
 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
