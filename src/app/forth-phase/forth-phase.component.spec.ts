import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthPhaseComponent } from './forth-phase.component';

describe('ForthPhaseComponent', () => {
  let component: ForthPhaseComponent;
  let fixture: ComponentFixture<ForthPhaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForthPhaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForthPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
