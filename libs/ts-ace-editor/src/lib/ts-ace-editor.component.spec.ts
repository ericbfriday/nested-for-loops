import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsAceEditorComponent } from './ts-ace-editor.component';

describe('TsAceEditorComponent', () => {
  let component: TsAceEditorComponent;
  let fixture: ComponentFixture<TsAceEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsAceEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsAceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
