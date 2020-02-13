import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormArray} from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { EmployeeFormPresenter } from '../employee-form-presenter/employee-form.presenter';

@Component({
  selector: 'app-employee-form-presentation-ui',
  templateUrl: './employee-form-presentation.html',
  styleUrls: ['./employee-form-presentation.scss'],
  providers:[EmployeeFormPresenter]
})
export class EmployeeFormPresentation implements OnInit, OnChanges {

  //employee list
  @Input() employee;
  // event for add employee
  @Output() employeeFormData = new EventEmitter<Employee>();
  // event for update employee
  @Output() update =new EventEmitter<Employee>();

  employeeObj: Employee; //employee object
  employeeForm: FormGroup; // emloyee form-froup
  address: FormArray; //address formarray
  departments = {}; // department object

  constructor(private empFormPresenter: EmployeeFormPresenter) {
  }

  /**
   * get employee form-controls
   */
  get employeeFormControls() { return this.employeeForm.controls; }

  /**
   * build employee form
   */
  ngOnInit() {
    this.employeeForm = this.empFormPresenter.buildEmployeeForm();
  }

  /**
   * bind employee value to form-controls
   */
  ngOnChanges() {
    if (this.employee != undefined) {
      this.employeeForm.patchValue(this.employee);
    }
  }

  /**
   * add and update employee
   */
  onSubmit() {
    if (!this.employee) {
      this.empFormPresenter.addEmployee();
      this.employeeFormData.emit(this.empFormPresenter.employeeObj);
    }
    else
    {
      this.empFormPresenter.updateEmployee();
      this.update.emit(this.empFormPresenter.employeeObj);
    }
  }

  /**
   * resets form
   */
  onReset() {
    this.empFormPresenter.onResetForm();
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
    this.empFormPresenter.addAddress();
  }

  deleteAddress(index) {
    this.addresses.removeAt(index);
  }
}
