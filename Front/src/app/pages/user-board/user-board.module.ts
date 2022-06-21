import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserBoardPageRoutingModule } from './user-board-routing.module';

import { UserBoardPage } from './user-board.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserBoardPageRoutingModule
  ],
  declarations: [UserBoardPage]
})
export class UserBoardPageModule {}
