import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



const AUTH_API = 'http://localhost:5001/api/';
@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private http: HttpClient) { }

  detail(){
    return this.http.get(
      AUTH_API + 'signin',
      {

      },

    );
  }

}
