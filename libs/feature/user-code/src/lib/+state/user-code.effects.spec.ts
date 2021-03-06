import { async, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { LoadUserCode, UserCodeLoaded } from './user-code.actions';
import { UserCodeEffects } from './user-code.effects';

describe('UserCodeEffects', () => {
  let actions: Observable<any>;
  let effects: UserCodeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        UserCodeEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(UserCodeEffects);
  });

  describe('loadUserCode$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadUserCode() });
      expect(effects.loadUserCode$).toBeObservable(
        hot('-a-|', { a: new UserCodeLoaded([]) })
      );
    });
  });
});
