import { TestBed } from '@angular/core/testing';

import { AceEditorService } from './ace-editor.service';

describe('AceEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AceEditorService = TestBed.get(AceEditorService);
    expect(service).toBeTruthy();
  });
});
