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

  employees$ =new Observable<Employee>();
  
  constructor(private employeeService:EmployeeService) { 
    this.getAllEmployee();
  }

  
  ngOnInit() {
  }

  getAllEmployee(){
    this.employees$=this.employeeService.getEmployees();
  }

  deleteEmployee($event)
  {
    this.employeeService.removeEmployee($event).subscribe(()=>{
      this.getAllEmployee();
    });
  }

}
