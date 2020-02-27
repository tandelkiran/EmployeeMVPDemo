import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { EmployeeListPresenter } from '../employee-list-presenter/employee-list.presenter';
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
  @Output() delete: EventEmitter<number>;
  //event for searching
  @Output() search: EventEmitter<Employee>;
  // event for sorting
  @Output() sort: EventEmitter<Employee[]>;
  //order to sort
  @Output() order: EventEmitter<boolean>;

  public searchText: string;
  public flag: boolean;

  constructor() {
    this.flag = false;
    this.delete = new EventEmitter<number>();
    this.search = new EventEmitter<Employee>();
    this.sort = new EventEmitter<Employee[]>();
    this.order = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

  /**
   * search employee by input any field
   */
  public searchByAnyField(searchText): void {
    this.search.emit(searchText);
  }

  /**
   *  sort employees by first name and and emit two event sort-order 
   *  and toggle asc-desc based on flag
   */
  public sortByName(): void {
    this.flag = !this.flag;
    this.sort.emit(this.employees);
    this.order.emit(this.flag);
  }

  /**
   * remove employee
   * @param empId id of employee
   */
  public removeEmployee(empId: number): void {
    this.delete.emit(empId);
  }
}
