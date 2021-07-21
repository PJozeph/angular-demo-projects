import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ServersService } from "../servers.service";

@Injectable()
export class ServerResolve implements Resolve<any> {

    constructor(private serverService : ServersService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const data = this.serverService.getServer(+route.params['id']);
        console.log(data)
        return data;
    }

}