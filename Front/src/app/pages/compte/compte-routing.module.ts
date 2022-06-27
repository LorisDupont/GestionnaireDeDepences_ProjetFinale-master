import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from 'src/app/components/auth/auth.component';
import { ComptePage } from './compte.page';

const routes: Routes = [
  {
    path: '',
    component: ComptePage
  },
  {
    path: '/autre',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComptePageRoutingModule {}
