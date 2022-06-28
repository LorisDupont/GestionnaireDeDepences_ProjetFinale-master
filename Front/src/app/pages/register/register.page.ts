import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: any = {
    nom: null,
    prenom: null,
    datedenaissance: null,
    email: null,
    password: null,
    genre: null,
    salaire: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor( private authService: AuthService) { }

  ngOnInit() {
  }
  onSubmit(): void {
    const {nom,prenom,datedenaissance, email, password, genre, salaire} = this.form;
    this.authService.register(nom,prenom,datedenaissance, email, password,genre,salaire).subscribe({
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
