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

  // orderStr:string='';
  
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

   /**
    * search employee by any field from table
    * @param searchText text of input search
    */
  searchEmployee(searchText){
    this.employees$=this.employeeService.searchEmployee(searchText);
  }

  // order(flag)
  // {
  //   flag = !flag;
  //   if(flag)
  //   {
  //     this.orderStr='asc';
  //   }
  //   else
  //   {
  //     this.orderStr='desc';
  //   }
  // }

  sortEmployee()
  {
    debugger
    this.employees$=this.employeeService.sortEmployee();
  }
}
