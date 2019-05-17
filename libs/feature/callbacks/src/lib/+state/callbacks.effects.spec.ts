import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { CallbacksEffects } from './callbacks.effects';
import { LoadCallbacks, CallbacksLoaded } from './callbacks.actions';

describe('CallbacksEffects', () => {
  let actions: Observable<any>;
  let effects: CallbacksEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        CallbacksEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(CallbacksEffects);
  });

  describe('loadCallbacks$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadCallbacks() });
      expect(effects.loadCallbacks$).toBeObservable(
        hot('-a-|', { a: new CallbacksLoaded([]) })
      );
    });
  });
});
