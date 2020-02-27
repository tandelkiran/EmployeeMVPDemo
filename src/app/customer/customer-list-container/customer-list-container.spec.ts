import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListContainer } from './customer-list-container';

describe('CustomerListContainer', () => {
  let component: CustomerListContainer;
  let fixture: ComponentFixture<CustomerListContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerListContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
