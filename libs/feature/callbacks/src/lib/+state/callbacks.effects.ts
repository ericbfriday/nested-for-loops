import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import {
  CallbacksActionTypes,
  CallbacksLoaded,
  CallbacksLoadError,
  LoadCallbacks
} from './callbacks.actions';
import { CallbacksPartialState } from './callbacks.reducer';

@Injectable()
export class CallbacksEffects {
  @Effect() public loadCallbacks$ = this.dataPersistence.fetch(
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
