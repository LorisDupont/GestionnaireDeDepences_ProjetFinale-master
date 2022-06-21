import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:5001/api/comptes/';
const httpOptions = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

};
@Injectable({
  providedIn: 'root',
})
export class CompteService {
  constructor(private http: HttpClient) {}

  create(nom: string,  description: string): Observable<any> {
    return this.http.post(
      AUTH_API ,
      {
        nom,
        description,

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

