import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { UserCodePartialState } from './user-code.reducer';
import {
  LoadUserCode,
  UserCodeLoaded,
  UserCodeLoadError,
  UserCodeActionTypes
} from './user-code.actions';

@Injectable()
export class UserCodeEffects {
  @Effect() loadUserCode$ = this.dataPersistence.fetch(
    UserCodeActionTypes.LoadUserCode,
    {
      run: (action: LoadUserCode, state: UserCodePartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new UserCodeLoaded([]);
      },

      onError: (action: LoadUserCode, error) => {
        console.error('Error', error);
        return new UserCodeLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<UserCodePartialState>
  ) {}
}
