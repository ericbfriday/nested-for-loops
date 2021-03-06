import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { WebApisEffects } from './web-apis.effects';
import { WebApisFacade } from './web-apis.facade';

import { LoadWebApis, WebApisLoaded } from './web-apis.actions';
import {
  Entity,
  initialState,
  webApisReducer,
  WebApisState
} from './web-apis.reducer';
import { webApisQuery } from './web-apis.selectors';

interface TestSchema {
  webApis: WebApisState;
}

describe('WebApisFacade', () => {
  let facade: WebApisFacade;
  let store: Store<TestSchema>;
  let createWebApis;

  beforeEach(() => {
    createWebApis = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('webApis', webApisReducer, { initialState }),
          EffectsModule.forFeature([WebApisEffects])
        ],
        providers: [WebApisFacade]
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
      facade = TestBed.get(WebApisFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allWebApis$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allWebApis$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `WebApisLoaded` to manually submit list for state management
     */
    it('allWebApis$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allWebApis$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new WebApisLoaded([createWebApis('AAA'), createWebApis('BBB')])
        );

        list = await readFirst(facade.allWebApis$);
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
