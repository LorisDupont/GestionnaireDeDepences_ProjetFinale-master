import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  url = `http://localhost:5001/api/comptes`
  itemse= []
  item = null
  constructor(private http: HttpClient, public service: TokenStorageService) {
    const ide = service.getUser().id
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);
  


        for(let i in data ){
     
          if(data.hasOwnProperty(i)   ){
            

                this.itemse.push(data[i])
                console.log(this.itemse.length);
                
                
            
            
        }
    
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
