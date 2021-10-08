import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from 'projects/employee-book-core/src/lib/components/modal/modal.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path : 'dialogWindow', component : ModalComponent, outlet : 'dialog'},
  {path : '', component : HomeComponent , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
