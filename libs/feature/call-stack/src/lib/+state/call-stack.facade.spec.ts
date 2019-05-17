import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { CallStackEffects } from './call-stack.effects';
import { CallStackFacade } from './call-stack.facade';

import { callStackQuery } from './call-stack.selectors';
import { LoadCallStack, CallStackLoaded } from './call-stack.actions';
import {
  CallStackState,
  Entity,
  initialState,
  callStackReducer
} from './call-stack.reducer';

interface TestSchema {
  callStack: CallStackState;
}

describe('CallStackFacade', () => {
  let facade: CallStackFacade;
  let store: Store<TestSchema>;
  let createCallStack;

  beforeEach(() => {
    createCallStack = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('callStack', callStackReducer, {
            initialState
          }),
          EffectsModule.forFeature([CallStackEffects])
        ],
        providers: [CallStackFacade]
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
      facade = TestBed.get(CallStackFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allCallStack$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allCallStack$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `CallStackLoaded` to manually submit list for state management
     */
    it('allCallStack$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allCallStack$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new CallStackLoaded([createCallStack('AAA'), createCallStack('BBB')])
        );

        list = await readFirst(facade.allCallStack$);
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
