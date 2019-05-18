import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { NestedForLoopsRootEffects } from './nested-for-loops-root.effects';
import { NestedForLoopsRootFacade } from './nested-for-loops-root.facade';

import { nestedForLoopsRootQuery } from './nested-for-loops-root.selectors';
import {
  LoadNestedForLoopsRoot,
  NestedForLoopsRootLoaded
} from './nested-for-loops-root.actions';
import {
  NestedForLoopsRootState,
  Entity,
  initialState,
  nestedForLoopsRootReducer
} from './nested-for-loops-root.reducer';

interface TestSchema {
  nestedForLoopsRoot: NestedForLoopsRootState;
}

describe('NestedForLoopsRootFacade', () => {
  let facade: NestedForLoopsRootFacade;
  let store: Store<TestSchema>;
  let createNestedForLoopsRoot;

  beforeEach(() => {
    createNestedForLoopsRoot = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(
            'nestedForLoopsRoot',
            nestedForLoopsRootReducer,
            { initialState }
          ),
          EffectsModule.forFeature([NestedForLoopsRootEffects])
        ],
        providers: [NestedForLoopsRootFacade]
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
      facade = TestBed.get(NestedForLoopsRootFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allNestedForLoopsRoot$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allNestedForLoopsRoot$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `NestedForLoopsRootLoaded` to manually submit list for state management
     */
    it('allNestedForLoopsRoot$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allNestedForLoopsRoot$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new NestedForLoopsRootLoaded([
            createNestedForLoopsRoot('AAA'),
            createNestedForLoopsRoot('BBB')
          ])
        );

        list = await readFirst(facade.allNestedForLoopsRoot$);
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
