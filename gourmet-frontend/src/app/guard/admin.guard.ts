import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.getAuthenticationState().pipe(
      take(1),
      map(user => {
        if (user && user.userType === 'ADMIN') {
          return true;
        }

        this.router.navigate(['/auth/login']);
        return false;
      })
    );

    // if (this.authService.isAdmin()) {
    //   console.log("Hola is admin guard");
    //   return true;
    // }

    // this.router.navigate(['/auth/login']);
    // return false;
  }
}
