import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthComponent } from '../components/auth/auth.component';
const AUTH_API = 'http://localhost:5001/api/depenses/';
const httpOptions = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

};
@Injectable({
  providedIn: 'root',
})
export class DepenseService {
  constructor(private http: HttpClient) {}
  create(nom: string, valeur: number, description: string, type: string, categorie: string, date: Date): Observable<any> {
    return this.http.post(
      AUTH_API ,
      {
        nom,
        valeur,
        description,
        type,
        categorie,
        date,
      },
      httpOptions
    );
  }
  findByPk(id: any): Observable<any> {
    return this.http.post(
      AUTH_API + `:${{id}}`,
      {
        id,

      },
      httpOptions
    );
  }

}

