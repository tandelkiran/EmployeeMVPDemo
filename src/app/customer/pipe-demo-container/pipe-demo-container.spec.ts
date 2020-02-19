import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDemoContainer } from './pipe-demo-container';

describe('PipeDemoContainer', () => {
  let component: PipeDemoContainer;
  let fixture: ComponentFixture<PipeDemoContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeDemoContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeDemoContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
