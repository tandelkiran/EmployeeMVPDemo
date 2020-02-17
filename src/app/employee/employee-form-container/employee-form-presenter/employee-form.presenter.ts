import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

@Injectable()

export class EmployeeFormPresenter {
  employeeObj: Employee;
  employeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  buildEmployeeForm(): FormGroup {
    return this.employeeForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.maxLength(10)]],
      address: this.formBuilder.array([this.formBuilder.group({ myAddress: '' })]),
      gender: ['', [Validators.required]],
      deptName: ['', [Validators.required]],
      hireDate: ['', [Validators.required]],
      permenent: ['']
    });
  }

  get addresses() {
    return this.buildEmployeeForm().get('address') as FormArray;
  }

  /**
   * adds dynamic form-control of address
   */
  addAddress() {
    debugger
    this.addresses.push(this.formBuilder.group({ myAddress: '' }));
  }

  /**
   * remove address form-control
   * @param index id of address form-control
   */
  deleteAddress(index) {
    this.addresses.removeAt(index);
  }

  /**
   * add employee
   */
  addEmployee() {
    debugger
    if (this.employeeForm.valid) {
      debugger
      this.employeeObj = new Employee();
      this.employeeObj = this.employeeForm.value;
    }
  }

  /**
   * update employee
   */
  updateEmployee() {
    debugger
    if (this.employeeForm.valid) {
      debugger
      this.employeeObj = this.employeeForm.value;
    }
  }
}
