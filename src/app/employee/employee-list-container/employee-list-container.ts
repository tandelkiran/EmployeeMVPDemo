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

  //get observable of employees for listing
  employees$ = new Observable<Employee[]>();

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.getAllEmployee();
  }

  /**
   * get employee list
   */
  getAllEmployee(){
    this.employees$ = this.employeeService.getEmployees();
  }

  /**
   * remove employee
   * @param id delete employee with this id
   */
  deleteEmployee(id: number) {
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
}
