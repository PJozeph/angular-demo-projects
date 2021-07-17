import { Component } from "@angular/core";

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html',
    styles : [`
    .online {
        color: white;
    }`]
})
export class ServerComponent {
    serverID : number  = 1;
    serverStatus : string = 'offline';

    serverCreationStatus = 'No server is created';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'Offline' : 'Online';
        console.log(this.serverStatus)
    }

    getServerStatus() {
        return this.serverStatus;
    }

    onServerCrreation() {
        this.serverCreationStatus = 'server is created';
    }

    getColor() {
        return this.serverStatus === 'Offline' ? 'red' : 'green';
    }
}