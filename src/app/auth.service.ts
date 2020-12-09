import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = 'http://localhost:9999/api/user/login';
  private _registerUrl = 'http://localhost:9999/api/user/register';
  private _verifyUrl = 'http://localhost:9999/api/user/verify'

  constructor(private http: HttpClient) { }

  loginUser(username, password) {
    return this.http.post<any>(this._loginUrl, {username, password}, {observe: 'response'})
  };

  registerUser(username, password, token) {
    return this.http.post<any>(this._registerUrl, {username, password, token}, {observe: 'response'})
  };

  loggedIn() {    
    return this.http.get<any>(this._verifyUrl).subscribe(
      res => {
        if (res.status) {
          localStorage.setItem('status', 'true');
        } else {
          localStorage.setItem('status', 'false');
        }
      },
      err => console.log (err)     
    )
    
  };

  getToken() {
    return localStorage.getItem('token')
  }

  verifyLogin() {
    return this.http.get<any>(this._verifyUrl)
  }

}
