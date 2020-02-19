import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { Observable } from 'rxjs';

@Injectable()

export class EmployeeFormPresenter {
  employeeObj: Employee;
  employeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  public buildEmployeeForm(): FormGroup {
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
  public addAddress() {
    this.addresses.push(this.formBuilder.group({ myAddress: '' }));
  }

  /**
   * remove address form-control
   * @param index id of address form-control
   */
  public deleteAddress(index): void {
    this.addresses.removeAt(index);
  }

  /**
   * add employee
   */
  public addEmployee() {
    if (this.employeeForm.valid) {
      this.employeeObj = new Employee();
      this.employeeObj = this.employeeForm.value;
    }
  }

  /**
   * update employee
   */
  public updateEmployee() {
    if (this.employeeForm.valid) {
      this.employeeObj = this.employeeForm.value;
    }
  }
}
