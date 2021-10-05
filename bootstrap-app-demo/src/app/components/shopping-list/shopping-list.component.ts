import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  onOpen() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      'top' : '0',
      'left' : '0'
    }
    this.dialog.open(DialogComponent, dialogConfig)
   }

  ngOnInit(): void {
  }

}
