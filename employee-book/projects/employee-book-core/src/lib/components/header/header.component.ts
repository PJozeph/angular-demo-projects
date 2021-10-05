import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() public headerStyle = ''

  constructor() { }

  ngOnInit(): void {
  }

}
