import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDepensePageRoutingModule } from './add-depense-routing.module';

import { AddDepensePage } from './add-depense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDepensePageRoutingModule
  ],
  declarations: [AddDepensePage]
})
export class AddDepensePageModule {}
