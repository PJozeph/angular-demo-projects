import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MiddleNavigationComponent } from './components/middle-navigation/middle-navigation.component';
import { RightNavigationComponent } from './components/right-navigation/right-navigation.component';
import { SearchComponent } from './components/search/search.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { LeftLayoutComponent } from './components/layout/left-layout/left-layout.component';
import { CenterLayoutComponent } from './components/layout/center-layout/center-layout.component';


@NgModule({
  declarations: [
    SearchComponent,
    HeaderComponent,
    MiddleNavigationComponent,
    RightNavigationComponent,
    CreateEmployeeComponent,
    LeftLayoutComponent,
    CenterLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SearchComponent,
    HeaderComponent,
    MiddleNavigationComponent,
    LeftLayoutComponent,
    CenterLayoutComponent
  ]
})
export class EmployeeBookCoreModule { }
