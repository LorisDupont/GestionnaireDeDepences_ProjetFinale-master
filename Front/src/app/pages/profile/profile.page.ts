import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  currentUser: any;
  id: any;


  constructor( private router: Router ,private authService: AuthService, private token: TokenStorageService, private userService: UserService) { }
 

  ngOnInit() {
    this.currentUser = this.token.getUser();

  }
  test(){
    console.log(this.currentUser.nom);
    console.log(this.currentUser.id);
    console.log(this.currentUser.datedenaissance);
    console.log(this.currentUser.salaire);
    
  }
  logout(){
    this.authService.logout().subscribe({
      next: data => {
        console.log('deconnecter');

      },
      error: err => {
        console.log('error');

      }
    });
    this.token.signOut();
    this.reloadPage()


  }

  reloadPage() {
    window.location.reload();

 }



}
