import { async, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { EditorLoaded, LoadEditor } from './editor.actions';
import { EditorEffects } from './editor.effects';

describe('EditorEffects', () => {
  let actions: Observable<any>;
  let effects: EditorEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        EditorEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(EditorEffects);
  });

  describe('loadEditor$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadEditor() });
      expect(effects.loadEditor$).toBeObservable(
        hot('-a-|', { a: new EditorLoaded([]) })
      );
    });
  });
});
