import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDemoPresentation } from './pipe-demo-presentation';

describe('PipeDemoPresentation', () => {
  let component: PipeDemoPresentation;
  let fixture: ComponentFixture<PipeDemoPresentation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeDemoPresentation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeDemoPresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
