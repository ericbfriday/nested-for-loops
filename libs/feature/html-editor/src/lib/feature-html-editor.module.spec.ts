import { async, TestBed } from '@angular/core/testing';
import { FeatureHtmlEditorModule } from './feature-html-editor.module';

describe('FeatureHtmlEditorModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureHtmlEditorModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureHtmlEditorModule).toBeDefined();
  });
});
