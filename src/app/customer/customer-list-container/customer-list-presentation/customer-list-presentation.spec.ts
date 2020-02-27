import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListPresentation} from './customer-list-presentation';

describe('CustomerListPresentation', () => {
  let component: CustomerListPresentation;
  let fixture: ComponentFixture<CustomerListPresentation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerListPresentation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListPresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
