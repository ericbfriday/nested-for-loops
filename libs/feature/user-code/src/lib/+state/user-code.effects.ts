import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import {
  LoadUserCode,
  UserCodeActionTypes,
  UserCodeLoaded,
  UserCodeLoadError
} from './user-code.actions';
import { UserCodePartialState } from './user-code.reducer';

@Injectable()
export class UserCodeEffects {
  @Effect() public loadUserCode$ = this.dataPersistence.fetch(
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
