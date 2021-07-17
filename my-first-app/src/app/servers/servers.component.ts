import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServers = false;
  serverCreationStatus: string = 'No server is created';
  serverName : string = 'testServer';
  serverIsCreated : boolean = false;
  servers = ['server1', 'server2']

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onServerCreation() {
    this.serverIsCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server is created! The name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
