import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDemoPresentation } from './directive-demo-presentation';

describe('DirectiveDemoPresentation', () => {
  let component: DirectiveDemoPresentation;
  let fixture: ComponentFixture<DirectiveDemoPresentation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveDemoPresentation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveDemoPresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
