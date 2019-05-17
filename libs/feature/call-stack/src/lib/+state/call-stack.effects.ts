import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { CallStackPartialState } from './call-stack.reducer';
import {
  LoadCallStack,
  CallStackLoaded,
  CallStackLoadError,
  CallStackActionTypes
} from './call-stack.actions';

@Injectable()
export class CallStackEffects {
  @Effect() loadCallStack$ = this.dataPersistence.fetch(
    CallStackActionTypes.LoadCallStack,
    {
      run: (action: LoadCallStack, state: CallStackPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new CallStackLoaded([]);
      },

      onError: (action: LoadCallStack, error) => {
        console.error('Error', error);
        return new CallStackLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CallStackPartialState>
  ) {}
}
