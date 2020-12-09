import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService,
    private _router: Router) { }

  async canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): Promise<boolean> {    
    return new Promise ((resolve => {
      this._authService.loggedIn().subscribe(res => {
        if (res.status) {
          console.log(res.status)
          resolve(true)
        } else {
          console.log(res.status);          
          resolve(false);
        }
      })
    }))
  }
}