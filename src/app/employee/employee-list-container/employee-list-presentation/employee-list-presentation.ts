import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Employee } from '../../../models/employee';

@Component({
  selector: 'app-employee-list-presentation-ui',
  templateUrl: './employee-list-presentation.html',
  styleUrls: ['./employee-list-presentation.scss']
})
export class EmployeeListPresentation implements OnInit {

  @Input() employees; 
  @Output() delete =new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  removeEmployee(empId:number)
  {
    this.delete.emit(empId);
  }

}
