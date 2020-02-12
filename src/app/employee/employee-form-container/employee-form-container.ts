import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/app/models/employee';
import { EmployeeFormPresenter } from './employee-form-presenter/employee-form.presenter';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.html',
  styleUrls: ['./employee-form-container.scss']
})
export class EmployeeFormContainer implements OnInit {
employee:any;
  public empId:any;
  constructor(
    private employeeService:EmployeeService,
    private empPresenter:EmployeeFormPresenter,
    private route: ActivatedRoute
  ) { }

  
  ngOnInit() {
    this.empId=this.route.snapshot.paramMap.get('id');
    this.employee=this.employeeService.getEmployeeById(Number(this.empId));
  }

  // addEmployee($event){
  //   debugger
  //   this.employeeService.addEmployeeData($event).subscribe(data=>
  //     {
  //       if(data)
  //       {
  //         alert('Added');
  //       }
  //     });
  // }
  addEmployee($event){
    debugger
    this.employeeService.addEmployeeData($event).subscribe(data=>
      {
        if(data && $event!=null)
        {
          alert('Record Inserted');
        }
      });
  }
  updateEmployee($event){
    debugger
    this.employeeService.updateEmployeeData($event,this.empId).subscribe(data=>
      {
        if(data)
        {
          alert('Updated');
        }
      });
  }
}
