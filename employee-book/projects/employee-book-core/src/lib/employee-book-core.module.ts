import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EventsListComponent } from './components/events/events-list/events-list.component';
import { HeaderComponent } from './components/header/header.component';
import { CenterLayoutComponent } from './components/layout/center-layout/center-layout.component';
import { LeftLayoutComponent } from './components/layout/left-layout/left-layout.component';
import { MiddleNavigationComponent } from './components/middle-navigation/middle-navigation.component';
import { RightNavigationComponent } from './components/right-navigation/right-navigation.component';
import { SearchComponent } from './components/search/search.component';
import { OnFocusDirective } from './directives/on-focus.directive';


@NgModule({
  declarations: [
    SearchComponent,
    HeaderComponent,
    MiddleNavigationComponent,
    RightNavigationComponent,
    CreateEmployeeComponent,
    LeftLayoutComponent,
    CenterLayoutComponent,
    EmployeeListComponent,
    EventsListComponent,
    OnFocusDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    SearchComponent,
    HeaderComponent,
    MiddleNavigationComponent,
    LeftLayoutComponent,
    CenterLayoutComponent,
    EmployeeListComponent,
  ]
})
export class EmployeeBookCoreModule { }
