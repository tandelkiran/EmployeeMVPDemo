import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeFormContainer } from './employee-form-container/employee-form-container';
import { EmployeeFormPresentation } from './employee-form-container/employee-form-presentation/employee-form-presentation';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeeListContainer } from './employee-list-container/employee-list-container';
import { EmployeeListPresentation } from './employee-list-container/employee-list-presentation/employee-list-presentation';
import { EmployeeService } from './employee.service';
import { ArrowDirective } from './directives/arrow.directive';


@NgModule({
  declarations: [EmployeeFormContainer, EmployeeFormPresentation, EmployeeListContainer, EmployeeListPresentation, ArrowDirective],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[EmployeeService]
})
export class EmployeeModule { }
