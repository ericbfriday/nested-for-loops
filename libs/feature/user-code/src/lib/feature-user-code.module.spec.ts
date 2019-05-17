import { async, TestBed } from '@angular/core/testing';
import { FeatureUserCodeModule } from './feature-user-code.module';

describe('FeatureUserCodeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureUserCodeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureUserCodeModule).toBeDefined();
  });
});
