import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Otpverify } from '../model/otpverify.model';

@Injectable({
  providedIn: 'root'
})
export class OtpverificationService {

  constructor(private httpClient : HttpClient) { }

  private otpVeriryApiUrl : string = "http://localhost:8080/api/otpverify";

  public verifyOtp(otptoverify : Otpverify) : Observable<boolean> {
    return this.httpClient.post<boolean>(this.otpVeriryApiUrl,otptoverify);
  }

}
