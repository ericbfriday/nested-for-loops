import { async, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import {
  LoadNestedForLoopsRoot,
  NestedForLoopsRootLoaded
} from './nested-for-loops-root.actions';
import { NestedForLoopsRootEffects } from './nested-for-loops-root.effects';

describe('NestedForLoopsRootEffects', () => {
  let actions: Observable<any>;
  let effects: NestedForLoopsRootEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        NestedForLoopsRootEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(NestedForLoopsRootEffects);
  });

  describe('loadNestedForLoopsRoot$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadNestedForLoopsRoot() });
      expect(effects.loadNestedForLoopsRoot$).toBeObservable(
        hot('-a-|', { a: new NestedForLoopsRootLoaded([]) })
      );
    });
  });
});
