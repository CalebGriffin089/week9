import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { addProducts } from './components/addProducts/addProducts';
import { Products } from './components/products/products';
import { Remove } from './components/remove/remove';
import { updateProducts } from './components/updateProducts/updateProducts';
const routes: Routes = [
  {
    path: 'addProducts',
    component: addProducts, 
    title:"addProducts"
  },
  {
    path: 'products',
    component: Products,
    title: "products"
  },
  {
    path: 'remove',
    component: Remove,
    title: "remove"
  },
  {
    path: 'updateProducts/:id',
    component: updateProducts,
    title: "updateProducts"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }