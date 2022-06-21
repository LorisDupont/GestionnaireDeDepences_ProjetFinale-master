import { Component, OnInit } from '@angular/core';
import {  Depense } from 'src/app/models/depense-model';
import { DepenseService } from 'src/app/services/depense.service';
import { Router } from '@angular/router';

import { Camera, CameraResultType } from '@capacitor/camera';



@Component({
  selector: 'app-add-depense',
  templateUrl: './add-depense.page.html',
  styleUrls: ['./add-depense.page.scss'],
})
export class AddDepensePage implements OnInit {
  depense: Depense;
  categories: any [];
  types: any [];
  form: any = {
    nom: null,
    valeur: null,
    description: null,
    type: null,
    genre: null,
    date: null,

  };
  constructor(private depenseService: DepenseService, public router: Router) {
    this.depense = {} as Depense;

    this.depense.pictures = [];
    this.categories = [
      {
        title: 'Loisir'
      },
      {
        title: 'Facture'
      },
      {
        title: 'Nourriture'
      },
      {
        title: 'Domiciliation'
      },
      {
        title: 'Abonnement'
      },
      {
        title: 'Economie'
      },
    ];
    this.types = [
      {
        title: 'Important'
      },
      {
        title: 'Obligatoire'
      },
      {
        title: 'Plaisir'
      },
      {
        title: 'Cadeaux'
      },

    ];

   }

  ngOnInit() {
  }
  onSubmit(){
    const { nom,valeur,description,type,genre,date } = this.form;

     this.depenseService.create(nom,valeur,description,type,genre,date).subscribe({

      next: data => {
        console.log(data);



      },
      error: err => {
        console.log(err);

      }
    });
  }


  async reloadPage() {
    await window.location.reload();

}
}
