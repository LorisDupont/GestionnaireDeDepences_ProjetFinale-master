import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErreurRoutePage } from './erreur-route.page';

const routes: Routes = [
  {
    path: '',
    component: ErreurRoutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErreurRoutePageRoutingModule {}
