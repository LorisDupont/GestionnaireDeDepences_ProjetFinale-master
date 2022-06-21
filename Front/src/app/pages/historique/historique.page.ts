import { Component, OnInit } from '@angular/core';
import {  Depense } from 'src/app/models/depense-model';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage implements OnInit {
  depense: Depense;


  constructor() {
    this.depense = {} as Depense;
   }

  ngOnInit() {
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


}
