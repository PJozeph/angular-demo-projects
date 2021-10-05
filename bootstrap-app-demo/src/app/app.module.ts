import { NgModule } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { OnFocusDirective } from './directive/on-focus-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    OnFocusDirective,
    ShoppingListComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
