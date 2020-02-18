import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerFormContainer } from './customer-form-container/customer-form-container';


const routes: Routes = [
  {
    path : '' , component : CustomerFormContainer
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
