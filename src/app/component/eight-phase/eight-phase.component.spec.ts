import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EightPhaseComponent } from './eight-phase.component';

describe('EightPhaseComponent', () => {
  let component: EightPhaseComponent;
  let fixture: ComponentFixture<EightPhaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EightPhaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EightPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
