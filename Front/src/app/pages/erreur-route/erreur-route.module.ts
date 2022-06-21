import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErreurRoutePageRoutingModule } from './erreur-route-routing.module';

import { ErreurRoutePage } from './erreur-route.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErreurRoutePageRoutingModule
  ],
  declarations: [ErreurRoutePage]
})
export class ErreurRoutePageModule {}
