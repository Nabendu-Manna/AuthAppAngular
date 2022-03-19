import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
import { LoginService } from './service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor(
    private authService: LoginService,
    private router: Router,
    private localStorage: LocalStorage
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):any {
    let isgo = true;
    this.localStorage.getItem('authJson').subscribe((authJson) => {

      if(authJson != null){
        isgo = true;
      } else {
        this.router.navigate(['/login']);
        isgo = false;
      }
    });

    return isgo;
    // this.router.navigate(['/login']);
  }

}
