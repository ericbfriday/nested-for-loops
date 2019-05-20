import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BraceEditorComponent } from './brace-editor.component';

describe('BraceEditorComponent', () => {
  let component: BraceEditorComponent;
  let fixture: ComponentFixture<BraceEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BraceEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BraceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
