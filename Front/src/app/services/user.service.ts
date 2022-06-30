import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from '../models/user-model';



@Injectable({
  providedIn: 'root',
})
export class UserService {


  
  constructor(private http: HttpClient ) {
    
  }

  user: any;
  getInfo(id: any){
    return this.http.get(`http://localhost:5001/api/users/`+ id)

  }
  

  getMoreInfo(id: any){
    return this.http.get(`http://localhost:5001/api/users/`+ id);

  }
}
