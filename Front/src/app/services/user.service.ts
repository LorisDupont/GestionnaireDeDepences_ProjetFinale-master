import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:5001/api/users';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  userInfo:any
  constructor(private http: HttpClient) {}

getInfo(){
  this.http.get('http://localhost:5001/api/users/1').subscribe(
    data => this.userInfo = data,
    error => console.error('There was an error!', error)
    
)
}


}
