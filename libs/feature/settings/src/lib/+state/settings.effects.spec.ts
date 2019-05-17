import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { SettingsEffects } from './settings.effects';
import { LoadSettings, SettingsLoaded } from './settings.actions';

describe('SettingsEffects', () => {
  let actions: Observable<any>;
  let effects: SettingsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        SettingsEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(SettingsEffects);
  });

  describe('loadSettings$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadSettings() });
      expect(effects.loadSettings$).toBeObservable(
        hot('-a-|', { a: new SettingsLoaded([]) })
      );
    });
  });
});
