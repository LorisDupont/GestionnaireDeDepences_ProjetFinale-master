import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  form: any = {
    nom: null,
    prenom: null,
    datedenaissance: null,
    email: null,
    password: null,
    genre: null,
    salaire: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService) { }

  ngOnInit() {}
    async onSubmit(){
    console.log('Test');
    const {nom,prenom,datedenaissance, email, password, genre, salaire } = this.form;
     await this.authService.register(nom,prenom,datedenaissance, email, password, genre, salaire).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;

      },

      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}

