import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerFormContainer } from './customer-form-container/customer-form-container';
import { PipeDemoContainer } from './pipe-demo-container/pipe-demo-container';
import { DirectiveDemoContainer } from './directive-demo-container/directive-demo-container';
import { CustomerListContainer } from './customer-list-container/customer-list-container';


const routes: Routes = [
  {
    path : '' , component : CustomerListContainer
  },
  {
    path : 'pipeDemo' , component : PipeDemoContainer
  },
  {
    path : 'directoryDemo' , component : DirectiveDemoContainer
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
