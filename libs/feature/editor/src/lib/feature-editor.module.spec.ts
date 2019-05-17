import { async, TestBed } from '@angular/core/testing';
import { FeatureEditorModule } from './feature-editor.module';

describe('FeatureEditorModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureEditorModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureEditorModule).toBeDefined();
  });
});
