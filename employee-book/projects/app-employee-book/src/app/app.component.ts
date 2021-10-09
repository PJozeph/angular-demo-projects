import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateEmployeeComponent } from 'projects/employee-book-core/src/lib/components/create-employee/create-employee.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-employee-book';

  constructor(private router : Router, public matDialog: MatDialog) {}

  open() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = { name : 'József'}
    const modalDialog = this.matDialog.open(CreateEmployeeComponent, dialogConfig);

    this.matDialog.afterAllClosed.subscribe( data => 
    console.log("Dialog output:", data))
  }
}
