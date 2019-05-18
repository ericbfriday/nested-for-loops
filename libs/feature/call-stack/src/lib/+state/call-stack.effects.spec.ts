import { async, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { CallStackLoaded, LoadCallStack } from './call-stack.actions';
import { CallStackEffects } from './call-stack.effects';

describe('CallStackEffects', () => {
  let actions: Observable<any>;
  let effects: CallStackEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        CallStackEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(CallStackEffects);
  });

  describe('loadCallStack$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadCallStack() });
      expect(effects.loadCallStack$).toBeObservable(
        hot('-a-|', { a: new CallStackLoaded([]) })
      );
    });
  });
});
