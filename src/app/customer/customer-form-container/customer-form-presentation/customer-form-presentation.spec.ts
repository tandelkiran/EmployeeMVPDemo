import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormPresentation } from './customer-form-presentation';

describe('CustomerFormPresentation', () => {
  let component: CustomerFormPresentation;
  let fixture: ComponentFixture<CustomerFormPresentation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerFormPresentation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFormPresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
