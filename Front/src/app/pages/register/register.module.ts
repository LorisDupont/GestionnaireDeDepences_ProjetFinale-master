import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';
import { AuthComponent } from 'src/app/components/auth/auth.component';
import { RegisterPage } from './register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,



    RegisterPageRoutingModule
  ],
  declarations: [RegisterPage, AuthComponent]
})
export class RegisterPageModule {}
