import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emailsend } from '../model/emailsend.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SendemailService {

  constructor(private httpClient : HttpClient) { }

  private emailSendApiUrl : string = "http://localhost:8080/api/emailsend";

  public sendVerificationEmail(emailtosend : Emailsend ) : Observable<boolean> {
    return this.httpClient.post<boolean>(this.emailSendApiUrl,emailtosend);
  }

}
