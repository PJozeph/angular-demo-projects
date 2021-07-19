import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  selectedId : number;

  constructor(private serversService: ServersService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param : Params) => {
        this.selectedId = parseInt(param['id']);
        this.server = this.serversService.getServer(this.selectedId);
      }
    )
  }

}
