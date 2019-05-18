import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import {
  CallStackActionTypes,
  CallStackLoaded,
  CallStackLoadError,
  LoadCallStack
} from './call-stack.actions';
import { CallStackPartialState } from './call-stack.reducer';

@Injectable()
export class CallStackEffects {
  @Effect() public loadCallStack$ = this.dataPersistence.fetch(
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
