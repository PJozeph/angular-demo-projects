import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable()
export class CanEditServer implements CanActivate, CanActivateChild {

    constructor(private authService : AuthService, private router : Router) {}

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.canActivate(childRoute, state);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        console.log("can activate ? ");
        return this.authService.isAuthenticated()
        .then((auth : boolean) => {
            console.log("new")
            console.log(auth)
            if(auth) {
                return true;
            } else {
                this.router.navigate(['/']);
            }
        })
    }

}