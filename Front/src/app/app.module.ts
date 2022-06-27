import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AuthService} from '../app/services/auth.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthComponent } from './components/auth/auth.component';
import { LoginPage } from './pages/login/login.page';
import { HomePage } from './pages/home/home.page';
import { RegisterPage } from './pages/register/register.page';




@NgModule({
  declarations: [
    AppComponent,


  ],

  entryComponents: [],

  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy,  }, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
