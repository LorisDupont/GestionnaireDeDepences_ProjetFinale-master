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
    image: null,
    pictures: null,

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
  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
  

  };
 
  
  onSubmit(){
    const { nom,valeur,description,type,genre,date,  } = this.form;

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
