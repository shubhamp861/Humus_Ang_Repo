import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonethPhaseComponent } from './noneth-phase.component';

describe('NonethPhaseComponent', () => {
  let component: NonethPhaseComponent;
  let fixture: ComponentFixture<NonethPhaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonethPhaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonethPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
