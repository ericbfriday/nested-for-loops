import { async, TestBed } from '@angular/core/testing';
import { FeatureJstsEditorModule } from './feature-jsts-editor.module';

describe('FeatureJstsEditorModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureJstsEditorModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureJstsEditorModule).toBeDefined();
  });
});
