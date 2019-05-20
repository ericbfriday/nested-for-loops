import { async, TestBed } from '@angular/core/testing';
import { CustomElementsCastModule } from './custom-elements-cast.module';

describe('CustomElementsCastModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomElementsCastModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomElementsCastModule).toBeDefined();
  });
});
