import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  inputFocus = false;

  ngOnInit(): void {
  }

  focusChange() {
    this.inputFocus = !this.inputFocus;
    console.log('focusChange()')
  }

}
