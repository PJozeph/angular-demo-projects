import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{name : string, content: string}>();
  @Output() bluePrintServerCreated = new EventEmitter<{name : string, content: string}>();

  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput', {static: true}) 
  serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
    
  }

  onAddServer(serverName : HTMLInputElement, content: HTMLInputElement) {
    this.serverCreated.emit({name : serverName.value, content : this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverName: HTMLInputElement, serverContent : HTMLInputElement) {
    this.bluePrintServerCreated.emit({name : serverName.value, content : this.serverContentInput.nativeElement.value});
  }

}
