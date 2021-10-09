import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MiddleNavigationComponent } from './components/middle-navigation/middle-navigation.component';
import { RightNavigationComponent } from './components/right-navigation/right-navigation.component';
import { SearchComponent } from './components/search/search.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';


@NgModule({
  declarations: [
    SearchComponent,
    HeaderComponent,
    MiddleNavigationComponent,
    RightNavigationComponent,
    CreateEmployeeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SearchComponent,
    HeaderComponent,
    MiddleNavigationComponent
  ]
})
export class EmployeeBookCoreModule { }
