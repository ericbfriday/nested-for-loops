/**
 * @WhatItDoes Test file for feature-callback module instantiation.
 */
// tslint:disable no-floating-promises
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
