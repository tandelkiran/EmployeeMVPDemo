import { TestBed } from '@angular/core/testing';

import { CustomerFormPresenter } from './customer-form.presenter';

describe('CustomerFormPresenter', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerFormPresenter = TestBed.get(CustomerFormPresenter);
    expect(service).toBeTruthy();
  });
});
