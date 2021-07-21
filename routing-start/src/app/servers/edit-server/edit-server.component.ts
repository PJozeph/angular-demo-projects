import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/observable';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;
  changesSaved: boolean = false;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean  {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm("Do you want to discard changes?");
    } else {
      return true;
    }
  }

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
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route })
  }

}
