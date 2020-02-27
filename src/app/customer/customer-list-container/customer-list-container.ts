import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {CustomerService} from '../services/customer.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-list-container',
  templateUrl: './customer-list-container.html',
  styleUrls: ['./customer-list-container.scss']
})
export class CustomerListContainer implements OnInit {

  customers$ = new Observable<Customer[]>();

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.getAllCustomer();
  }

  /**
   * get employees list 
   */
  public getAllCustomer(): void {
    debugger
    this.customers$ = this.customerService.getCustomers();
  }
}
