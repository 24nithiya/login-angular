import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getContacts(){
    return this.http.get(`${this.url}/user`);
  }
  store(server){
    return this.http.post<any>(`${this.url}/user`, server);
  }
}
