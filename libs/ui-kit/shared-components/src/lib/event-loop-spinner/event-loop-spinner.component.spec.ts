import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLoopSpinnerComponent } from './event-loop-spinner.component';

describe('EventLoopSpinnerComponent', () => {
  let component: EventLoopSpinnerComponent;
  let fixture: ComponentFixture<EventLoopSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventLoopSpinnerComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLoopSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
