import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from 'employee-book-core';
import { CreateEmployeeComponent } from 'projects/employee-book-core/src/lib/components/create-employee/create-employee.component';
import { EventsListComponent } from 'projects/employee-book-core/src/lib/components/events/events-list/events-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path : 'employees', component : EmployeeListComponent},
  {path : 'events', component : EventsListComponent},
  {path : 'newEmployee', component : CreateEmployeeComponent},
  {path : '', component : HomeComponent , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
