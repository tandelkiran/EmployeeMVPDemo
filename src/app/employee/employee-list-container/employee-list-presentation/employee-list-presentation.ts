import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeListPresenter } from '../employee-list-presenter/employee-list.presenter';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-list-presentation-ui',
  templateUrl: './employee-list-presentation.html',
  styleUrls: ['./employee-list-presentation.scss'],
  providers: [EmployeeListPresenter]
})
export class EmployeeListPresentation implements OnInit {

  //get all employees
  @Input() employees;
  
  //event for delete employee
  @Output() delete = new EventEmitter<number>();
  //event for searching
  @Output() search =new EventEmitter<Employee>();
  // event for sorting
  @Output() sort = new EventEmitter<Employee[]>();
  //order to sort
  @Output() order =new EventEmitter<boolean>();
  searchText: string;
  flag:boolean;
  orderString:string='';
  private emps;

  constructor() {
    this.flag=false;
  }

  ngOnInit() {
    this.flag=false;
  }

  /**
   * search employee by input any field
   */
  searchByName(searchText)
  {
    this.search.emit(searchText);
  }

  sortByName(){
    debugger
    // this.flag = !this.flag;
    // if(this.flag)
    // {
    //   this.orderString = 'asc';
    // }
    // else
    // {
    //   this.orderString = 'desc';
    // }
    this.sort.emit(this.employees);
    // this.order.emit(this.orderString);
    this.order.emit(this.flag);
  }

  /**
   * remove employee
   * @param empId id of employee
   */
  removeEmployee(empId: number) {
    this.delete.emit(empId);
  }
}
