import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeFormContainer } from './employee-form-container/employee-form-container';
import { EmployeeListContainer } from './employee-list-container/employee-list-container';


const routes: Routes = [
  {
    path : '' , component : EmployeeListContainer
  },
  {
    path : 'empForm' , component :EmployeeFormContainer
  },
  {
    path : 'empForm/:id' , component :EmployeeFormContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
