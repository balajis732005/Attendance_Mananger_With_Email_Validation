import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Auth } from '../model/auth.model';
import { Name } from '../model/name.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpClient : HttpClient) { }

  private loginApiUrl : string = "http://localhost:8080/api/auth";

  public loginCheck(loginData : Auth) : Observable<Name> {
    return this.httpClient.post<Name>(this.loginApiUrl,loginData);
  }

}
