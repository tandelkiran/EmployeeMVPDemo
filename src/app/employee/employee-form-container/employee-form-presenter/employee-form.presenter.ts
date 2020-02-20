import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

@Injectable()

export class EmployeeFormPresenter {
  employeeObj: Employee;
  employeeForm: FormGroup;
  public address: FormArray;

  constructor(private formBuilder: FormBuilder) {
  }

  public buildEmployeeForm(): FormGroup {
    return this.employeeForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.maxLength(10)]],
      address: this.formBuilder.array([this.buildAddresses()]),
      gender: ['', [Validators.required]],
      deptName: ['', [Validators.required]],
      hireDate: ['', [Validators.required]],
      permenent: ['']
    });
  }

  /**
   * add address
   */
  public addAddress(): void {
    debugger
    this.address = this.employeeForm.get('address') as FormArray;
    this.address.push(this.buildAddresses());
  }

  /**
   * remove address
   * @param index get formgroup id to remove address
   */
  public removeGroup(index: number): void {
    const control = <FormArray>this.employeeForm.controls['address'];
    control.removeAt(index);
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

  /**
   * create a dynamic addresses
   */
  private buildAddresses(): FormGroup {
    return this.formBuilder.group({
      city: [''],
      state: [''],
      pinCode: ['']
    });
  }
}
