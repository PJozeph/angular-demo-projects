import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ServersService } from "../servers.service";

@Injectable({ providedIn: 'root' })
export class ServerResolve implements Resolve<any> {

    constructor(private serverService : ServersService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.serverService.getServer(+route.params['id']);
    }

}