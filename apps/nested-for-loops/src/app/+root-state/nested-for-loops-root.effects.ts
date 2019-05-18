import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { NestedForLoopsRootPartialState } from './nested-for-loops-root.reducer';
import {
  LoadNestedForLoopsRoot,
  NestedForLoopsRootLoaded,
  NestedForLoopsRootLoadError,
  NestedForLoopsRootActionTypes
} from './nested-for-loops-root.actions';

@Injectable()
export class NestedForLoopsRootEffects {
  @Effect() loadNestedForLoopsRoot$ = this.dataPersistence.fetch(
    NestedForLoopsRootActionTypes.LoadNestedForLoopsRoot,
    {
      run: (
        action: LoadNestedForLoopsRoot,
        state: NestedForLoopsRootPartialState
      ) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new NestedForLoopsRootLoaded([]);
      },

      onError: (action: LoadNestedForLoopsRoot, error) => {
        console.error('Error', error);
        return new NestedForLoopsRootLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<NestedForLoopsRootPartialState>
  ) {}
}
