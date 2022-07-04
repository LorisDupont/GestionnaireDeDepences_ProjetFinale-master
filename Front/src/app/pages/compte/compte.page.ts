import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/services/compte.service';
import {  Compte } from 'src/app/models/compte-model';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {
  url = `http://localhost:5001/api/comptes`
  comptes=[]
  compte: Compte
  id: any
  item = null
  constructor(private http: HttpClient, public service: TokenStorageService, public compt: CompteService) {

    this.id = this.service.getUser().id

    this.http.get(this.url).toPromise().then(data => {
      console.log(data);
  


        for(let i in data ){
     
          if(data.hasOwnProperty(i)   ){
            

                this.comptes.push(data[i])
                console.log(this.comptes.length);

        }
    
      }
      

    })
   }

  ngOnInit() {
  }
  onSubmit(){


    const { nom,description} = this.compte;
    // const id = this.id
   const id = this.service.getUser().id
    this.compt.create(nom,description,id).subscribe({
      
      next: data => {
        console.log(data);
 
        


      },
      error: err => {
        console.log('okoko');

      }
    });
  }

  delete(){

  }
  modif(){

  }

}
