import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Add } from './components/add/add';
import { Read } from './components/read/read';
import { Remove } from './components/remove/remove';
import { Update } from './components/update/update';
const routes: Routes = [
  {
    path: 'add',
    component: Add, 
    title:"add"
  },
  {
    path: 'read',
    component: Read,
    title: "read"
  },
  {
    path: 'remove',
    component: Remove,
    title: "remove"
  },
  {
    path: 'update/:id',
    component: Update,
    title: "update"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }