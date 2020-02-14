import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl : string;  // http://localhost:3000/

  deptUrl=`${this.apiUrl}department`;

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.baseUrl;
  }

  /**
   * get department list
   */
  getAllDepts(){
    return this.http.get(this.deptUrl);
  }

  /**
   * get employee list
   */
  getEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}employees`);
  }

  /**
   * get employee by id
   * @param id get employee id
   */
  getEmployeeById(id: number) : Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}employees/${id}`);
  }

  /**
   * add new employee service method
   * @param employee employee object
   */
  addEmployeeData(employee: Employee) : Observable<Employee> {
      return this.http.post<Employee>(`${this.apiUrl}employees`,employee);
  }

  /**
   * update employee 
   * @param employee single employee data
   */
  updateEmployeeData(employee,id:number) : Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}employees/${id}`, employee);
  }

  /**
   * remove employee
   * @param id get employee id
   */
  removeEmployee(id:number) : Observable<Employee>{
    return this.http.delete<Employee>(`${this.apiUrl}employees/${id}`);
  }

  /**
   * search employee
   * @param employee string of any field to search
   */
  searchEmployee(employee:Employee) : Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiUrl}employees?q=${employee}`);
  }

  sortEmployee() : Observable<Employee[]>{
    debugger
    return this.http.get<Employee[]>(`${this.apiUrl}employees?_sort=firstName&_order=desc`);
  }
}
