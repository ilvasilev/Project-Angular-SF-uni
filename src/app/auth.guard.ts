import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService,
    private _router: Router) { }

  canActivate(): boolean {
    this._authService.loggedIn()
     const bool = JSON.parse(localStorage.getItem("status"));     
   if(bool) {
     console.log('true')
     return true;    
   } else {
    console.log('false')
    this._router.navigate(['/login']);
   }
  }
}