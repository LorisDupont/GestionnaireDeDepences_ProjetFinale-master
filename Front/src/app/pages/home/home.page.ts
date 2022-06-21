import { Component } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements  AfterViewInit {

  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
  doughnutChart: any;
  constructor() {}



  openSlideMenu() {
    document.getElementById('side-menu').style.visibility='visible';
    document.getElementById('menucloses').style.visibility='visible';
    document.getElementById('side-menu').style.width='175px';
    document.getElementById('side-menu').style.border='1px solid white';
    document.getElementById('side-menu').style.borderLeft='0px';
    document.getElementById('ham').style.visibility='hidden';
    document.getElementById('card').style.marginLeft='175px';
    document.getElementById('menucloses').style.position='fixed';
    document.getElementById('menucloses').style.top='40';

  }
  closeSlideMenu() {
    document.getElementById('side-menu').style.visibility='hidden';
    document.getElementById('side-menu').style.width='0px';
    document.getElementById('ham').style.visibility='visible';
    document.getElementById('menucloses').style.visibility='hidden';
    document.getElementById('card').style.marginLeft='0px';

  }

  ngAfterViewInit() {
    this.doughnutChartMethod();

  }


  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Loisir', 'Facture', 'Nourriture', 'Domiciliation', 'Abonnement', 'Economie'],
        datasets: [{
          label: 'depenses',
          data: [50, 29, 15, 10, 7, 17],
          backgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384',
            '#FFBE53'
          ],
          hoverBackgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(165, 76, 26, 0.2)'

          ]
        }]
      }
    });
  }
}
