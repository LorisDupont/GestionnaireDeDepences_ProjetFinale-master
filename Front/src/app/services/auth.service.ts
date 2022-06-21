import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthComponent } from '../components/auth/auth.component';
const AUTH_API = 'http://localhost:5001/api/auth/';
const httpOptions = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        email,
        password,
      },

      httpOptions
    );

  }
  register(nom: string, prenom: string, datedenaissance: Date, email: string, password: string): Observable<any> {

    return this.http.post(
      AUTH_API + 'signup',
      {
        nom,
        prenom,
        datedenaissance,
        email,
        password,
      },
      httpOptions
    );
  }
  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}
