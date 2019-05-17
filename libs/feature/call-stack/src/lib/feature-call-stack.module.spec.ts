import { async, TestBed } from '@angular/core/testing';
import { FeatureCallStackModule } from './feature-call-stack.module';

describe('FeatureCallStackModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureCallStackModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureCallStackModule).toBeDefined();
  });
});
