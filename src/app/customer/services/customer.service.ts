import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Customer } from '../../models/customer';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // employee api url....'http://localhost:3000/customers'
  private apiUrl: string;

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.baseUrl+'customers';
  }

  /**
   * get employee list
   */
  public getCustomers(): Observable<Customer[]> {
    debugger
    return this.http.get<Customer[]>(`${this.apiUrl}`);
  }
}
