import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  currentUser: any;
  users: any  = [];
  infos:any= [];
  salaire:number;
  solde:number;
  constructor( private router: Router , private http: HttpClient ,private authService: AuthService, private token: TokenStorageService, private user: UserService) {
    this.users = this.user.getInfo();
    this.user.getInfo()
    .subscribe(response => {
      this.infos = response;
    });
    this.solde = this.infos.salaire

   }
 

  ngOnInit() {
    this.currentUser = this.token.getUser();
    if (!this.currentUser.id){
      document.getElementById("logout").style.display = "none"
      document.getElementById("connect").style.display = "flex"

    }else{
      document.getElementById("logout").style.display = "flex"
      document.getElementById("connect").style.display = "none"
      
    }

    this.user.getInfo()
    .subscribe(response => {
      this.infos = response;
      this.solde = Number(this.infos.salaire)
      this.salaire= Number(this.infos.salaire)
    });
    
  }
  test(){
    console.log(this.currentUser.nom);
    console.log(this.currentUser.id);
    console.log(this.infos.salaire);
    console.log(this.solde);
    

   
    
  }

  getData(){
    
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

 payer(){
  this.solde += this.salaire
  console.log(this.solde, this.salaire);
  
 }



}
