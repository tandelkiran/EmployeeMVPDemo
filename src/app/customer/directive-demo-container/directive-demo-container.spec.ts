import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDemoContainer } from './directive-demo-container';

describe('DirectiveDemoContainer', () => {
  let component: DirectiveDemoContainer;
  let fixture: ComponentFixture<DirectiveDemoContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveDemoContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveDemoContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});