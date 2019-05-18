import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbItemComponent } from './cb-item.component';

describe('CbItemComponent', () => {
  let component: CbItemComponent;
  let fixture: ComponentFixture<CbItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CbItemComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
