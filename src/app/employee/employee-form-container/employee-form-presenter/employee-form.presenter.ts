import { Injectable, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFormPresenter {

  // @Output() employeeFormData = new EventEmitter<Employee>();

  submitted: boolean = false;
  empObj: Employee;
  constructor(private formBuilder: FormBuilder
  ) {

  }

  employeeFormControls() { return this.employeeForm.controls; }

  employeeForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.maxLength(20)]],
    email: ['', [Validators.required]],
    mobile: ['', [Validators.required, Validators.maxLength(10)]],
    address: this.formBuilder.array([this.formBuilder.group({ myAddress: '' })]),
    gender: ['', [Validators.required]],
    deptName: ['', [Validators.required]],
    hireDate: ['', [Validators.required]],
    permenent: ['']
  });

  get addresses() {
    return this.employeeForm.get('address') as FormArray;
  }

  /**
   * adds dynamic form-control of address
   */
  addAddress() {
    debugger
    this.addresses.push(this.formBuilder.group({ myAddress: '' }));
  }

  deleteAddress(index) {
    this.addresses.removeAt(index);
  }

  onResetForm() {
    this.submitted = false;
    this.employeeForm.reset();
  }

  addEmp() {
    debugger
    this.submitted = true;
    if (this.employeeForm.valid) {
      debugger
      this.empObj = new Employee();
      this.empObj = this.employeeForm.value;
    }
    if (this.employeeForm.invalid) {
      return;
    }
  }
}
