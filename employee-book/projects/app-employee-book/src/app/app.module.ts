import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeBookCoreModule } from 'projects/employee-book-core/src/projects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
