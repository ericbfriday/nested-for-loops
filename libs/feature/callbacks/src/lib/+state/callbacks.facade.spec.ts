import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { CallbacksEffects } from './callbacks.effects';
import { CallbacksFacade } from './callbacks.facade';

import { callbacksQuery } from './callbacks.selectors';
import { LoadCallbacks, CallbacksLoaded } from './callbacks.actions';
import {
  CallbacksState,
  Entity,
  initialState,
  callbacksReducer
} from './callbacks.reducer';

interface TestSchema {
  callbacks: CallbacksState;
}

describe('CallbacksFacade', () => {
  let facade: CallbacksFacade;
  let store: Store<TestSchema>;
  let createCallbacks;

  beforeEach(() => {
    createCallbacks = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('callbacks', callbacksReducer, {
            initialState
          }),
          EffectsModule.forFeature([CallbacksEffects])
        ],
        providers: [CallbacksFacade]
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
      facade = TestBed.get(CallbacksFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allCallbacks$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allCallbacks$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `CallbacksLoaded` to manually submit list for state management
     */
    it('allCallbacks$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allCallbacks$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new CallbacksLoaded([createCallbacks('AAA'), createCallbacks('BBB')])
        );

        list = await readFirst(facade.allCallbacks$);
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
