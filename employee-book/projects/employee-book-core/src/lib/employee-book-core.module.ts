import { NgModule } from '@angular/core';
import { EmployeeBookCoreComponent } from './employee-book-core.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';



@NgModule({
  declarations: [
    EmployeeBookCoreComponent,
    EmployeeListComponent
  ],
  imports: [
  ],
  exports: [
    EmployeeBookCoreComponent,
    EmployeeListComponent
  ]
})
export class EmployeeBookCoreModule { }
