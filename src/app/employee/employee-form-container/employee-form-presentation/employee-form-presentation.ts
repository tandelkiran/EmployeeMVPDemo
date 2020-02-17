import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { EmployeeFormPresenter } from '../employee-form-presenter/employee-form.presenter';

@Component({
  selector: 'app-employee-form-presentation-ui',
  templateUrl: './employee-form-presentation.html',
  styleUrls: ['./employee-form-presentation.scss'],
  providers: [EmployeeFormPresenter]
})

export class EmployeeFormPresentation implements OnInit, OnChanges {

  public submitted: boolean = false;
  //employee list
  private _employees;

  get employee(): any {
    debugger
    return this._employees;
  }

  @Input()
  set employee(value: any) {
    if (value) {
      this._employees=value;
      this.employeeForm.patchValue(value);
    }
  }

  @Input() department;
  // event for add employee
  @Output() add = new EventEmitter<Employee>();
  // event for update employee
  @Output() update = new EventEmitter<Employee>();

  //employee object
  employeeObj: Employee;
  // emloyee form 
  employeeForm: FormGroup;
  //address formarray
  address: FormArray;

  constructor(private employeeFormPresenter: EmployeeFormPresenter) {
  }

  /**
   * get employee form-controls
   */
  get employeeFormControls() { return this.employeeForm.controls; }

  /**
   * build employee form
   */
  ngOnInit() {
    this.employeeForm = this.employeeFormPresenter.buildEmployeeForm();
  }

  ngOnChanges() {
  }

  /**
   * add and update employee
   */
  public onSubmit() {
    debugger
    this.submitted = true;
    if (this.employeeForm.invalid) {
      return;
    }
    if(this.employeeForm.valid)
    {
      if (!this._employees) {
        debugger
        this.employeeFormPresenter.addEmployee();
        this.add.emit(this.employeeFormPresenter.employeeObj);
      }
      else {
        debugger
        this.employeeFormPresenter.updateEmployee();
        this.update.emit(this.employeeFormPresenter.employeeObj);
      }
    }
  }

  /**
   * get employee form address control
   */
  get addresses() {
    return this.employeeForm.get('address') as FormArray;
  }

  /**
   * adds dynamic form-control of address
   */
  addAddress() {
    this.employeeFormPresenter.addAddress();
  }

  /**
   * delete dynamic control of address
   * @param index 
   */
  deleteAddress(index) {
    this.addresses.removeAt(index);
  }
}
