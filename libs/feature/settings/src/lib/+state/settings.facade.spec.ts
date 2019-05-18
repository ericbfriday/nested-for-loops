import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { SettingsEffects } from './settings.effects';
import { SettingsFacade } from './settings.facade';

import { LoadSettings, SettingsLoaded } from './settings.actions';
import {
  Entity,
  initialState,
  settingsReducer,
  SettingsState
} from './settings.reducer';
import { settingsQuery } from './settings.selectors';

interface TestSchema {
  settings: SettingsState;
}

describe('SettingsFacade', () => {
  let facade: SettingsFacade;
  let store: Store<TestSchema>;
  let createSettings;

  beforeEach(() => {
    createSettings = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('settings', settingsReducer, { initialState }),
          EffectsModule.forFeature([SettingsEffects])
        ],
        providers: [SettingsFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(SettingsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allSettings$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allSettings$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `SettingsLoaded` to manually submit list for state management
     */
    it('allSettings$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allSettings$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new SettingsLoaded([createSettings('AAA'), createSettings('BBB')])
        );

        list = await readFirst(facade.allSettings$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
