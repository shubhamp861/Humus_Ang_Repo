import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivePhaseComponent } from './five-phase.component';

describe('FivePhaseComponent', () => {
  let component: FivePhaseComponent;
  let fixture: ComponentFixture<FivePhaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivePhaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivePhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
