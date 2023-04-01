import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  baseUrl = 'https://api-sand-no8dw0a3v-ziadal3tar.vercel.app/sendEmail'

  constructor(private HttpClient: HttpClient) { }
  sendEmail(data: any): any {
    return this.HttpClient.post(`${this.baseUrl}`, data
    ,{
        headers: {
          // mode: 'no-cors',
        }
      }
    )
  }
}
