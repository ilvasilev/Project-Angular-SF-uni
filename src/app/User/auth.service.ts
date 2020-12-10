import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = 'http://localhost:9999/api/user/login';
  private _registerUrl = 'http://localhost:9999/api/user/register';
  private _verifyUrl = 'http://localhost:9999/api/user/verify';
  private _usersUrl = 'http://localhost:9999/api/user/users';

  constructor(private http: HttpClient, private _router: Router) { }

  loginUser(username, password) {
    return this.http.post<any>(this._loginUrl, {username, password}, {observe: 'response'})
  };

  registerUser(username, password, token) {
    return this.http.post<any>(this._registerUrl, {username, password, token}, {observe: 'response'})
  };

  loggedIn() {    
    return this.http.get<any>(this._verifyUrl);
  };

  getToken() {
    return localStorage.getItem('token')
  }

  isTokenAvailable() {
    return !!localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('id');
    this._router.navigate(['/']);
  }

  getUsers() {
    return this.http.get<any>(this._usersUrl);
  }

}
