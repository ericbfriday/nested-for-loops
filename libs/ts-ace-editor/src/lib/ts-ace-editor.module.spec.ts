import { async, TestBed } from '@angular/core/testing';
import { TsAceEditorModule } from './ts-ace-editor.module';

describe('TsAceEditorModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TsAceEditorModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TsAceEditorModule).toBeDefined();
  });
});
