import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { CodeEffects } from './code.effects';
import { LoadCode, CodeLoaded } from './code.actions';

describe('CodeEffects', () => {
  let actions: Observable<any>;
  let effects: CodeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        CodeEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(CodeEffects);
  });

  describe('loadCode$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadCode() });
      expect(effects.loadCode$).toBeObservable(
        hot('-a-|', { a: new CodeLoaded([]) })
      );
    });
  });
});
