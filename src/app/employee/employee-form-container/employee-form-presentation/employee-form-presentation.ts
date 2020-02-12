import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from '../../employee.service';
import { EmployeeFormPresenter } from '../employee-form-presenter/employee-form.presenter';

@Component({
  selector: 'app-employee-form-presentation-ui',
  templateUrl: './employee-form-presentation.html',
  styleUrls: ['./employee-form-presentation.scss']
})
export class EmployeeFormPresentation implements OnInit, OnChanges {

  @Input() employee;
  @Output() employeeFormData = new EventEmitter<Employee>();
  @Output() update =new EventEmitter<Employee>();
  empObj: Employee;
  employeeForm: FormGroup;
  address: FormArray;
  submitted: boolean = false;
  departments = {};

  public empId;

  constructor(
    private route: ActivatedRoute,
    private empPresenter: EmployeeFormPresenter
  ) {
  }

  /**
   * get employee form controls
   */
  get employeeFormControls() { return this.employeeForm.controls; }

  ngOnInit() {
    this.employeeForm = this.empPresenter.employeeForm;
  }
  ngOnChanges() {
    if (this.employee != undefined) {
      this.employeeForm.patchValue(this.employee);
    }
  }
  /**
   * add employee
   */
  onSubmit() {
    debugger
    if (!this.employee) {
      this.empPresenter.addEmp();
      this.employeeFormData.emit(this.empPresenter.empObj);
    }
    else
    {
      debugger
      this.empPresenter.addEmp();
      this.update.emit(this.empPresenter.empObj);
    }
  }

  /**
   * resets form
   */
  onReset() {
    this.empPresenter.onResetForm();
  }

  /**
   *
   */
  get addresses() {
    return this.employeeForm.get('address') as FormArray;
  }

  /**
   * adds dynamic form-control of address
   */
  addAddress() {
    debugger
    this.empPresenter.addAddress();
  }

  deleteAddress(index) {
    this.addresses.removeAt(index);
  }
}
