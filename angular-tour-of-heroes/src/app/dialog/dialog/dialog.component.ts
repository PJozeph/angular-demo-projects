import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor() { }

  @Input() windowStyle : string;

  @Input() modalHead : string;

  @Input() modalFooter : string;

  ngOnInit(): void {
  }

}
