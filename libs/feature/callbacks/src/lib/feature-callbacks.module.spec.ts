import { async, TestBed } from '@angular/core/testing';
import { FeatureCallbacksModule } from './feature-callbacks.module';

describe('FeatureCallbacksModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureCallbacksModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureCallbacksModule).toBeDefined();
  });
});
