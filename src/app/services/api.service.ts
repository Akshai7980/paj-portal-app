/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

const BASE_URL = 'https://connect.paj-gps.de/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  userToken: string;

  constructor(public http: HttpClient, private token: TokenService) {
    this.userToken = this.token.getToken();
   }

  postRequestForLogin(path: string, params: any) {
    const headers = {
      Accept: 'application/json',
      'X-CSRF-TOKEN': ''
    };
    const email = params.email;
    const encodedEmail = encodeURIComponent(email);
    const password = params.password;
    const encodedPassword = encodeURIComponent(password);

    return this.http.post(BASE_URL + path + '?email=' + encodedEmail + '&password=' + encodedPassword , { headers });
  }


  getMethod(path: string) {
    const headers = {
      Accept: 'application/json',
      Authorization: 'Bearer ' + this.userToken,
      'X-CSRF-TOKEN': ''
    };
    return this.http.get(BASE_URL + path , { headers });
  }
}
