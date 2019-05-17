import { async, TestBed } from '@angular/core/testing';
import { FeatureWebApisModule } from './feature-web-apis.module';

describe('FeatureWebApisModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureWebApisModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureWebApisModule).toBeDefined();
  });
});
