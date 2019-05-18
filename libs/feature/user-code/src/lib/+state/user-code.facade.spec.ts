import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { UserCodeEffects } from './user-code.effects';
import { UserCodeFacade } from './user-code.facade';

import { LoadUserCode, UserCodeLoaded } from './user-code.actions';
import {
  Entity,
  initialState,
  userCodeReducer,
  UserCodeState
} from './user-code.reducer';
import { userCodeQuery } from './user-code.selectors';

interface TestSchema {
  userCode: UserCodeState;
}

describe('UserCodeFacade', () => {
  let facade: UserCodeFacade;
  let store: Store<TestSchema>;
  let createUserCode;

  beforeEach(() => {
    createUserCode = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('userCode', userCodeReducer, { initialState }),
          EffectsModule.forFeature([UserCodeEffects])
        ],
        providers: [UserCodeFacade]
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
      facade = TestBed.get(UserCodeFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allUserCode$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allUserCode$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `UserCodeLoaded` to manually submit list for state management
     */
    it('allUserCode$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allUserCode$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new UserCodeLoaded([createUserCode('AAA'), createUserCode('BBB')])
        );

        list = await readFirst(facade.allUserCode$);
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
