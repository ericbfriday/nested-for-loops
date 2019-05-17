import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { CallbacksPartialState } from './callbacks.reducer';
import {
  LoadCallbacks,
  CallbacksLoaded,
  CallbacksLoadError,
  CallbacksActionTypes
} from './callbacks.actions';

@Injectable()
export class CallbacksEffects {
  @Effect() loadCallbacks$ = this.dataPersistence.fetch(
    CallbacksActionTypes.LoadCallbacks,
    {
      run: (action: LoadCallbacks, state: CallbacksPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new CallbacksLoaded([]);
      },

      onError: (action: LoadCallbacks, error) => {
        console.error('Error', error);
        return new CallbacksLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CallbacksPartialState>
  ) {}
}
