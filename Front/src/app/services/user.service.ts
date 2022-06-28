import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user-model';
const API_URL = "";
@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {}

}
