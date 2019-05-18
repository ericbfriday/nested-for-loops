import { async, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { CallbacksLoaded, LoadCallbacks } from './callbacks.actions';
import { CallbacksEffects } from './callbacks.effects';

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
