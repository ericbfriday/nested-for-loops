import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { SettingsPartialState } from './settings.reducer';
import {
  LoadSettings,
  SettingsLoaded,
  SettingsLoadError,
  SettingsActionTypes
} from './settings.actions';

@Injectable()
export class SettingsEffects {
  @Effect() loadSettings$ = this.dataPersistence.fetch(
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
