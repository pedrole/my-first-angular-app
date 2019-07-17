
import { HomeCompoent } from './home.component';

import { NgModule } from '@angular/core';
import {  Routes, RouterModule} from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {path: '', component: HomeCompoent},
  {path: 'products' , component: ProductsComponent}
]

@NgModule({

  imports:[
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{}
