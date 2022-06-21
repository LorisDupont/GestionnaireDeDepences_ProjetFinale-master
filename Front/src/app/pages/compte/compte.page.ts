import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {
  form: any = {
    nom: null,
    description: null
  };
  constructor(private compteService: CompteService) { }

  ngOnInit() {

  }

  onSubmit(){
    const { nom, description } = this.form;

     this.compteService.create(nom, description).subscribe({

      next: data => {
        this.reloadPage();


      },
      error: err => {
        console.log('error');

      }
    });
  }
  async reloadPage() {
    await window.location.reload();

}
}
