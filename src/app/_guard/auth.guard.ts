import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("Aqui estoy");
        if (localStorage.getItem('userLogin')) {

        return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/main'],

        { queryParams:
          { returnUrl: state.url }
        });

        return false;
    }
}
