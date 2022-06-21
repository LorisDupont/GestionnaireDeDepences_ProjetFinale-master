
import { AfterViewInit, ElementRef, ViewChild, Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.page.html',
  styleUrls: ['./user-board.page.scss'],
})
export class UserBoardPage implements AfterViewInit  {


  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;


  @ViewChild('polarAreaCanvas') private polarAreaCanvas: ElementRef;
  @ViewChild('barCanvas') private barCanvas: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;

  doughnutChart: any;
  polarAreaChart: any;
  barChart: any;
  lineChart: any;




  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.doughnutChartMethod();

    this.polarAreaChartMethod();
    this.barChartMethod();
    this.lineChartMethod();


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

  polarAreaChartMethod() {
    this.polarAreaChart = new Chart(this.polarAreaCanvas.nativeElement, {
      type: 'polarArea',
      data: {
        labels: [
          'Red',
          'Green',
          'Yellow',
          'Grey',
          'Blue'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
          ]
        }]
      }
    });
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Loisir', 'Facture', 'Nourriture', 'Domiciliation', 'Abonnement', 'Economie'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      }
    });
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Loisir', 'Facture', 'Nourriture', 'Domiciliation', 'Abonnement', 'Economie'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          borderColor: 'rgb(715, 92, 492)',
          tension: 0.1
        },{
          label: 'My second Dataset',
          data: [12, 29, 80, 41, 75, 15, 8],
          fill: true,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }
    });
  }


  changeLogo(){
    document.getElementById('vue').style.display = 'none';
    document.getElementById('nonvue').style.display = 'flex';
    document.getElementById('graph').style.display = 'none';
  }
  changesLogo(){
    document.getElementById('vue').style.display = 'flex';
    document.getElementById('nonvue').style.display = 'none';
    document.getElementById('graph').style.display = 'flex';
  }


  changeLogo2(){
    document.getElementById('vue2').style.display = 'none';
    document.getElementById('nonvue2').style.display = 'flex';
    document.getElementById('graph2').style.display = 'none';
  }
  changesLogo2(){
    document.getElementById('vue2').style.display = 'flex';
    document.getElementById('nonvue2').style.display = 'none';
    document.getElementById('graph2').style.display = 'flex';
  }

  changeLogo3(){
    document.getElementById('vue3').style.display = 'none';
    document.getElementById('nonvue3').style.display = 'flex';
    document.getElementById('graph3').style.display = 'none';
  }
  changesLogo3(){
    document.getElementById('vue3').style.display = 'flex';
    document.getElementById('nonvue3').style.display = 'none';
    document.getElementById('graph3').style.display = 'flex';
  }

  changeLogo4(){
    document.getElementById('vue4').style.display = 'none';
    document.getElementById('nonvue4').style.display = 'flex';
    document.getElementById('graph4').style.display = 'none';
  }
  changesLogo4(){
    document.getElementById('vue4').style.display = 'flex';
    document.getElementById('nonvue4').style.display = 'none';
    document.getElementById('graph4').style.display = 'flex';
  }
}
