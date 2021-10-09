import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MiddleNavigationComponent } from './components/middle-navigation/middle-navigation.component';
import { RightNavigationComponent } from './components/right-navigation/right-navigation.component';
import { SearchComponent } from './components/search/search.component';
import { ModalComponent } from './components/modal/modal.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SearchComponent,
    HeaderComponent,
    MiddleNavigationComponent,
    RightNavigationComponent,
    ModalComponent,
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
