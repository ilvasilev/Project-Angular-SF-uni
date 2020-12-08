import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = 'http://localhost:9999/api/user/login';
  private _registerUrl = 'http://localhost:9999/api/user/register';

  constructor(private http: HttpClient) { }

  loginUser(username, password) {
    return this.http.post<any>(this._loginUrl, {username, password}, {observe: 'response'})
  };

  registerUser(username, password, token) {
    return this.http.post<any>(this._registerUrl, {username, password, token}, {observe: 'response'})
  };

  loggedIn() {
    return !!localStorage.getItem('token')
  };

}
