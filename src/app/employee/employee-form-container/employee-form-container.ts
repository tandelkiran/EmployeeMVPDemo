import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/app/models/employee';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.html',
  styleUrls: ['./employee-form-container.scss']
})
export class EmployeeFormContainer implements OnInit {

  employee$:Observable<Employee>; // observable of employee
  public empId:any; //employee id for update

  constructor(
    private employeeService:EmployeeService,
    private route: ActivatedRoute,
    private location:Location
  ) { }

  
  ngOnInit() {
    this.empId=this.route.snapshot.paramMap.get('id');
    this.employee$=this.employeeService.getEmployeeById(Number(this.empId));
  }
  
  /**
   * add employee
   * @param employee employee detail
   */
  addEmployee(employee:Employee){
    this.employeeService.addEmployeeData(employee).subscribe(data=>
      {
        if(data && employee != null)
        {
          alert('Record Inserted...!!!');
        }
      });
  }

  /**
   * update employee
   * @param employee employee detail
   */
  updateEmployee(employee:Employee){
    this.employeeService.updateEmployeeData(employee,this.empId).subscribe(data=>
      {
        if(data)
        {
          alert('Record Updated...!!!');
          this.location.back();
        }
      });
  }
}
