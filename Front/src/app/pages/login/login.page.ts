import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

import { Router } from '@angular/router';
import { HomePage } from '../home/home.page';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];



  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,  public router: Router) { }


   ngOnInit() {
    if (  this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }


   onSubmit(){
    const { email, password } = this.form;

     this.authService.login(email, password).subscribe({

      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
        this.router.navigate(['/profile'])


      },

      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }

    });

  }


   reloadPage() {
     window.location.reload();

}
}
