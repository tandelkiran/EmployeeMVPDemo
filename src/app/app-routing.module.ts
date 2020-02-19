import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'employee',
    loadChildren:() => import('./employee/employee.module').then(m=>m.EmployeeModule)
  },
  {
    path: 'customer',
    loadChildren:() => import('./customer/customer.module').then(m=>m.CustomerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
