import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

import { Employee } from 'src/app/models/employee';
import { Department } from 'src/app/models/department';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.html',
  styleUrls: ['./employee-form-container.scss']
})
export class EmployeeFormContainer implements OnInit {

  // observable of employee
  employee$: Observable<Employee>;
  // observable of department
  department$: Observable<Department[]>;
  //employee id for update
  public empId: number;                

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

/**
 * get employee id from route and get data of employee containing this id
 */
  ngOnInit() {
    this.getDepartments();
    this.empId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.empId) {
      this.employee$ = this.employeeService.getEmployeeById(this.empId);
    }
  }

  /**
   * fetch all departments
   */
  public getDepartments(){
    this.department$=this.employeeService.getAllDepartments();
  }

  /**
   * add employee
   * @param employee employee detail
   */
  public addEmployee(employee: Employee) {
    this.employeeService.addEmployeeData(employee).subscribe(data => {
      if (data) {
        alert('Record Inserted...!!!');
      }
      else
      {
        alert('Not Inserted...!!!');
      }
    });
  }

  /**
   * update employee
   * @param employee employee detail
   */
  public updateEmployee(employee: Employee) {
    if (this.empId) {
      this.employeeService.updateEmployeeData(employee, this.empId).subscribe(data => {
        if (data) {
          alert('Record Updated...!!!');
          this.location.back();
        }
      });
    }
  }
}
