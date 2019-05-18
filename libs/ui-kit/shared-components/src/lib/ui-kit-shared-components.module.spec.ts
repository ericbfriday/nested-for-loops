import { async, TestBed } from '@angular/core/testing';
import { UiKitSharedComponentsModule } from './ui-kit-shared-components.module';

describe('UiKitSharedComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiKitSharedComponentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiKitSharedComponentsModule).toBeDefined();
  });
});
