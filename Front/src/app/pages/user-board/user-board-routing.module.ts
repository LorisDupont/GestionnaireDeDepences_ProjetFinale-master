import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserBoardPage } from './user-board.page';

const routes: Routes = [
  {
    path: '',
    component: UserBoardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserBoardPageRoutingModule {}
