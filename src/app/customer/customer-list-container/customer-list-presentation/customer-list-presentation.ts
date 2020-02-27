import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-list-presentation',
  templateUrl: './customer-list-presentation.html',
  styleUrls: ['./customer-list-presentation.scss']
})
export class CustomerListPresentation implements OnInit {

  @Input() customers;
  constructor() { }

  ngOnInit() {
  }


}
