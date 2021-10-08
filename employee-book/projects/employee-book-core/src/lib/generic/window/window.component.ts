import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-window',
  templateUrl: './window.component.html',
})
export class WindowComponent implements OnInit {

  constructor() { }

  @Input() windowStyle : string = '';

  ngOnInit(): void {
  }

}
