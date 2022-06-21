import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDepensePage } from './add-depense.page';

const routes: Routes = [
  {
    path: '',
    component: AddDepensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDepensePageRoutingModule {}
