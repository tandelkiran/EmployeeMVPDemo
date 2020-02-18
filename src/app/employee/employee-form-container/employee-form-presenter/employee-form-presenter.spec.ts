import { TestBed } from '@angular/core/testing';

import { EmployeeFormPresenter } from './employee-form.presenter';

describe('EmployeeFormPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeFormPresenter = TestBed.get(EmployeeFormPresenter);
    expect(service).toBeTruthy();
  });
});
