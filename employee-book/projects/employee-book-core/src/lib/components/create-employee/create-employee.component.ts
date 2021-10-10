import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'lib-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  firstName : string = '';

  lastName : string = '';

  email : string = '';

  jobTitle : string = '';

  preferredContact : string = ''

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('onSave')
  }

}
