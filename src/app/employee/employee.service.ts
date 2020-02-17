import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // employee URL....http://localhost:3000/ 
  public apiUrl: string;

  // department URL
  public deptUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.baseUrl;
    this.deptUrl=environment.baseUrl+'department';
  }

  /**
   * get department list
   */
  public getAllDepartments() : Observable<Department[]> {
    debugger
    return this.http.get<Department[]>(`${this.deptUrl}`);
  }

  /**
   * get employee list
   */
  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}employees`);
  }

  /**
   * get employee by id
   * @param id get employee id
   */
  public getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}employees/${id}`);
  }

  /**
   * add new employee service method
   * @param employee employee object
   */
  public addEmployeeData(employee: Employee): Observable<Employee> {
    debugger
    return this.http.post<Employee>(`${this.apiUrl}employees`, employee);
  }

  /**
   * update employee 
   * @param employee single employee data
   */
  public updateEmployeeData(employee, id: number): Observable<Employee> {
    debugger
    return this.http.put<Employee>(`${this.apiUrl}employees/${id}`, employee);
  }

  /**
   * remove employee
   * @param id get employee id
   */
  public removeEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.apiUrl}employees/${id}`);
  }

  /**
   * search employee
   * @param employee string of any field to search
   */
  public searchEmployee(employee: Employee): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}employees?q=${employee}`);
  }

  /**
   * sort employees by first name
   * @param orderString string for sort -'asc/desc'
   */
  public sortEmployees(orderString: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}employees?_sort=firstName&_order=${orderString}`);
  }
}
