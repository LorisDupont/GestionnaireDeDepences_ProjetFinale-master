import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  url = `http://localhost:5001/api/depenses`
  items= []
  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);
      for(let i in data)
        if(data.hasOwnProperty(i))
          this.items.push(data[i])
          for(let i = 0; i < this.items[i].categorie.length;i++){
            console.log(this.items[i].categorie);
            
          }
          
          

    })
   }

  ngOnInit() {
  }

  delete(){

  }
  modif(){

  }

}
