import { async, TestBed } from '@angular/core/testing';
import { FeatureRenderQueueModule } from './feature-render-queue.module';

describe('FeatureRenderQueueModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureRenderQueueModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureRenderQueueModule).toBeDefined();
  });
});
