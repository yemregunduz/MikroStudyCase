import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Helpers } from '../helpers/functions';
import { LoginCredentials } from '../contracts';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const authInformation : LoginCredentials = Helpers.localStorage.readAsJson('userInformation');
    if (!authInformation?.email || !authInformation.password) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
