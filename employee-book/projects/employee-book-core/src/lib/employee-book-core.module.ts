import { NgModule } from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { MiddleNavigationComponent } from './components/middle-navigation/middle-navigation.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    SearchComponent,
    HeaderComponent,
    MiddleNavigationComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SearchComponent,
    HeaderComponent,
    MiddleNavigationComponent
  ]
})
export class EmployeeBookCoreModule { }
