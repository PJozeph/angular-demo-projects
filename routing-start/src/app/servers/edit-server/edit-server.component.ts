import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(
      (param: Params) => {
        this.server = this.serversService.getServer(+(param['id']));
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
      }
    );
    this.route.queryParams.subscribe(
      (param: Params) => {
        this.allowEdit = param['allowEdit'] === '1' ? true : false;
        console.log(this.allowEdit)
        console.log(param['allowEdit'])
      }
    );
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
  }

}
