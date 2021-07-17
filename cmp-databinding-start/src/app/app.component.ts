import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements = [{type: 'server', name: 'TestServer', content: 'This is just a test'}];

  onServerAdded(server : {name : string, content: string}) {
    this.serverElements.push({
      type: 'server',
      name: server.name,
      content: server.content
    });
  }

  onBlueprintServerAdded(server : {name : string, content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: server.name,
      content: server.content
    });
  }

}
