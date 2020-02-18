import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormContainer } from './customer-form-container';

describe('CustomerFormContainerComponent', () => {
  let component: CustomerFormContainer;
  let fixture: ComponentFixture<CustomerFormContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerFormContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFormContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
