import { NgModule } from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { MiddleNavigationComponent } from './components/middle-navigation/middle-navigation.component';

@NgModule({
  declarations: [
    SearchComponent,
    HeaderComponent,
    MiddleNavigationComponent
  ],
  imports: [
  ],
  exports: [
    SearchComponent,
    HeaderComponent,
    MiddleNavigationComponent
  ]
})
export class EmployeeBookCoreModule { }
