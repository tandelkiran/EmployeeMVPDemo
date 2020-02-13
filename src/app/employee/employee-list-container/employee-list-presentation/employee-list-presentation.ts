import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeListPresenter } from '../employee-list-presenter/employee-list.presenter';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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

  id: number = 1;
  searchText: string;

  constructor(private route: ActivatedRoute, private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    debugger
    this.http.get(`http://localhost:3000/employees/`).subscribe(params => {
      debugger
      console.log(JSON.stringify(params));

      var employeeArray = Object.keys(params).map(i => params[i]);
      console.log('myarray:-' + employeeArray);

      return employeeArray.filter(function (params) {
        debugger
        return params.firstName.toLowerCase().indexOf(params.toLowerCase()) > -1;
      });
    }
    );
  }
  searchByName(searchText) {
    debugger
    this.router.navigate(['/employee'], { queryParams: { q: searchText } });
    debugger
    this.route.queryParams.subscribe(params => {
      debugger
      console.log('PARAMS' + JSON.stringify(params));
      this.id = params['firstName'];
    })
  }
  /**
   * remove employee
   * @param empId id of employee
   */
  removeEmployee(empId: number) {
    this.delete.emit(empId);
  }
}
