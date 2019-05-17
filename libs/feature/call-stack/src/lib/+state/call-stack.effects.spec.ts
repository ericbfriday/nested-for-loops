import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { CallStackEffects } from './call-stack.effects';
import { LoadCallStack, CallStackLoaded } from './call-stack.actions';

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
