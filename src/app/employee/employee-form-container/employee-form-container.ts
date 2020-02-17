import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/app/models/employee';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Department } from 'src/app/models/department';

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

  getDepartments(){
    debugger
    this.department$=this.employeeService.getAllDepartments();
  }

  /**
   * add employee
   * @param employee employee detail
   */
  public addEmployee(employee: Employee) {
    debugger
    this.employeeService.addEmployeeData(employee).subscribe(data => {
      debugger
      if (data) {
        alert('Record Inserted...!!!');
      }
    });
  }

  /**
   * update employee
   * @param employee employee detail
   */
  public updateEmployee(employee: Employee) {
    debugger
    if (this.empId) {
      debugger
      this.employeeService.updateEmployeeData(employee, this.empId).subscribe(data => {
        if (data) {
          debugger
          alert('Record Updated...!!!');
          this.location.back();
        }
      });
    }
  }
}
