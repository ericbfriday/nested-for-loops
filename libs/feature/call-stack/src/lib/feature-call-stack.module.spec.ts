/**
 * Testing for feature-call-stack module creation.
 */
import { async, TestBed } from '@angular/core/testing';
import { FeatureCallStackModule } from './feature-call-stack.module';

describe('FeatureCallStackModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureCallStackModule]
    })
      .compileComponents()
      .catch((e: Error) => new Error(e.message));
  }));

  it('should create', () => {
    expect(FeatureCallStackModule).toBeDefined();
  });
});
