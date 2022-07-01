import { Component, OnInit } from '@angular/core';
import {  Depense } from 'src/app/models/depense-model';
import { DepenseService } from 'src/app/services/depense.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage implements OnInit {
  depenses: any = [];
  infos: any= [];
  isOpen = false;
url = `http://localhost:5001/api/depenses`
items= []
  constructor(private http: HttpClient ,private service: DepenseService) {
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);
      for(let i in data)
        if(data.hasOwnProperty(i))
          this.items.push(data[i])

    })
    if(this.depenses.categorie == "Loisir"){
      document.getElementById('ionCard').style.backgroundColor="red"
    }
    
   }

  ngOnInit() {
    // this.service.findAll()
    // .subscribe(response => {
    //   this.infos = response;

    // });
    // console.log(this.infos);

  }

  openModal(){
    document.getElementById('modal').style.width='100%';
    document.getElementById('modal').style.height='100%';
    document.getElementById('modal').style.zIndex='3';
    document.getElementById('modal').style.color='white';
    document.getElementById('modal').style.display='flex';
  }

  closeModal(){
    document.getElementById('modal').style.width='0';
    document.getElementById('modal').style.height='0';
    document.getElementById('modal').style.zIndex='0';
    document.getElementById('modal').style.color='white';
    document.getElementById('modal').style.display='none';
  }

  openFilter(){
    document.getElementById('depenses').style.marginTop='450px';
    document.getElementById('filter').style.height='auto';
    document.getElementById('filters').style.display='none';
    document.getElementById('filtercloses').style.display='flex';
    document.getElementById('filter').style.width='100%';
  }
  closefilter(){
    document.getElementById('depenses').style.marginTop='0px';
    document.getElementById('filter').style.height='0';
    document.getElementById('filters').style.display='flex';
    document.getElementById('filter').style.width='0';
    document.getElementById('filtercloses').style.display='none';
  }

  delete(id){
    this.http.delete(id)
  } 


}
