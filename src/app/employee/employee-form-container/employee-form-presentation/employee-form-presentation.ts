import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

import { Employee } from 'src/app/models/employee';
import { EmployeeFormPresenter } from '../employee-form-presenter/employee-form.presenter';

@Component({
  selector: 'app-employee-form-presentation-ui',
  templateUrl: './employee-form-presentation.html',
  styleUrls: ['./employee-form-presentation.scss'],
  providers: [EmployeeFormPresenter]
})

export class EmployeeFormPresentation implements OnInit {

  public isFormSubmitted: boolean;
  //employee list
  private _employees: Observable<Employee[]>;

  get employee(): any {
    debugger
    return this._employees;
  }

  @Input()
  set employee(value: any) {
    if (value) {
      this._employees = value;
      this.employeeForm.patchValue(value);
    }
  }

  @Input() department;
  // event for add employee
  @Output() add: EventEmitter<Employee>;
  // event for update employee
  @Output() update: EventEmitter<Employee>;

  //employee object
  employeeObj: Employee;
  // emloyee form 
  employeeForm: FormGroup;
  //address formarray
  address: FormArray;

  constructor(private employeeFormPresenter: EmployeeFormPresenter) {
    this.isFormSubmitted = false;
    this.add = new EventEmitter<Employee>();
    this.update = new EventEmitter<Employee>();
  }

  /**
   * get employee form-controls
   */
  get controls() { return this.employeeForm.controls; }

  /**
   * build employee form
   */
  ngOnInit() {
    this.employeeForm = this.employeeFormPresenter.buildEmployeeForm();
  }

  /**
   * add and update employee
   */
  public onSubmit(): void {
    this.isFormSubmitted = true;
    if (this.employeeForm.invalid) {
      return;
    }
    if (!this._employees) {
      this.employeeFormPresenter.addEmployee();
      this.add.emit(this.employeeFormPresenter.employeeObj);
    }
    else {
      this.employeeFormPresenter.updateEmployee();
      this.update.emit(this.employeeFormPresenter.employeeObj);
    }
  }

  /**
   * adds dynamic form-control of address
   */
  public addNewAddress(): void {
    this.employeeFormPresenter.addAddress();
  }

  /**
   * delete dynamic control of address
   * @param index 
   */
  public removeAddress(index: number): void {
    this.employeeFormPresenter.removeGroup(index);
  }
}
