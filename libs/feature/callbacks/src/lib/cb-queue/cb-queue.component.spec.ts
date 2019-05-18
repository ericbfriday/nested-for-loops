import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbQueueComponent } from './cb-queue.component';

describe('CbQueueComponent', () => {
  let component: CbQueueComponent;
  let fixture: ComponentFixture<CbQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CbQueueComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
