import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhPhaseComponent } from './seventh-phase.component';

describe('SeventhPhaseComponent', () => {
  let component: SeventhPhaseComponent;
  let fixture: ComponentFixture<SeventhPhaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeventhPhaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventhPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
