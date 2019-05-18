// tslint:disable no-unsafe-any no-any
import { async, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';

import { DataPersistence, NxModule } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { LoadWebApis, WebApisLoaded } from './web-apis.actions';
import { WebApisEffects } from './web-apis.effects';

describe('WebApisEffects', () => {
  let actions: Observable<any>;
  let effects: WebApisEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        WebApisEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(WebApisEffects);
  });

  describe('loadWebApis$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadWebApis() });
      expect(effects.loadWebApis$).toBeObservable(
        hot('-a-|', { a: new WebApisLoaded([]) })
      );
    });
  });
});
