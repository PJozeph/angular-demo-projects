import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeBookCoreModule } from 'projects/employee-book-core/src/projects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeBookCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
