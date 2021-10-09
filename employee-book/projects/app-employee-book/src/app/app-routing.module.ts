import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from 'projects/employee-book-core/src/lib/components/create-employee/create-employee.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path : 'newEmployee', component : CreateEmployeeComponent},
  {path : '', component : HomeComponent , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
