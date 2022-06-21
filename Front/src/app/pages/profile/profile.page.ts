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



  constructor( private router: Router ,private authService: AuthService, private token: TokenStorageService, private userService: UserService) { }


  ngOnInit() {
    this.currentUser = this.token.getUser();
    
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



  }

  reloadPage() {
    window.location.reload();

 }



}
