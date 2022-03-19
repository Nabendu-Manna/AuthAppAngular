import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string;
  constructor(private httpClient:HttpClient) {
    this.apiUrl = "http://127.0.0.1:8000";
  }

  login(payload: any){
    return this.httpClient.post(this.apiUrl+"/gettoken", payload);
  }

  getUserData(payload: any) {
    let headers = new HttpHeaders().set('token', payload.token);
    // payload['headers'] = headers
    return this.httpClient.post(this.apiUrl+"/details", payload);
  }
}
