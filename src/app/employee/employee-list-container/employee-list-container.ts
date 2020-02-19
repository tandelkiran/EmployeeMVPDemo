import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Employee } from 'src/app/models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.html',
  styleUrls: ['./employee-list-container.scss']
})
export class EmployeeListContainer implements OnInit {

  // get observable of employees for listing
  employees$ = new Observable<Employee[]>();
  // order string for sort employee-list
  public orderStr: string;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.getAllEmployee();
  }

  /**
   * get employees list 
   */
  public getAllEmployee(): void {
    this.employees$ = this.employeeService.getEmployees();
  }

  /**
   * remove employee
   * @param id delete employee with this id
   */
  public deleteEmployee(id: number): void {
    let res = confirm('Are you sure you want to delete ?');
    if (res) {
      this.employeeService.removeEmployee(id).subscribe(response => {
        if (response) {
          alert(`Record deleted with id:${id}`);
          this.getAllEmployee();
        }
      });
    }
  }

  /**
   * search employee by any field from table
   * @param searchText text of input search
   */
  public searchEmployee(searchText): void {
    this.employees$ = this.employeeService.searchEmployee(searchText);
  }

  /**
   * set order for sorting based on flag and set order-string
   * @param flag get true-false
   */
  public order(flag): void {
    if (flag === true) {
      this.orderStr = 'asc'
    }
    else {
      this.orderStr = 'desc'
    }
  }

  /**
   * sort employee by name
   */
  public sortEmployees(): void {
    this.employees$ = this.employeeService.sortEmployees(this.orderStr);
  }
}
