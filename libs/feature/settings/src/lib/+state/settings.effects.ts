import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import {
  LoadSettings,
  SettingsActionTypes,
  SettingsLoaded,
  SettingsLoadError
} from './settings.actions';
import { SettingsPartialState } from './settings.reducer';

@Injectable()
export class SettingsEffects {
  @Effect() public loadSettings$ = this.dataPersistence.fetch(
    SettingsActionTypes.LoadSettings,
    {
      run: (action: LoadSettings, state: SettingsPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new SettingsLoaded([]);
      },

      onError: (action: LoadSettings, error) => {
        console.error('Error', error);
        return new SettingsLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<SettingsPartialState>
  ) {}
}
