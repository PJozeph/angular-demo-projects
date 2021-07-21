import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  selectedId : number;

  constructor(private serversService: ServersService, 
              private activatedRoute : ActivatedRoute,
              private router : Router ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      (data : Params) => {
        console.log(data)
        this.server = data['server']
      }
    )
    this.activatedRoute.params.subscribe(
      (param : Params) => {
        console.log(param)
        this.selectedId = parseInt(param['id']);
        this.server = this.serversService.getServer(this.selectedId);
      }
    )
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo : this.activatedRoute, queryParamsHandling : 'preserve'});
  }

}
