import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { CodePartialState } from './code.reducer';
import {
  LoadCode,
  CodeLoaded,
  CodeLoadError,
  CodeActionTypes
} from './code.actions';

@Injectable()
export class CodeEffects {
  @Effect() loadCode$ = this.dataPersistence.fetch(CodeActionTypes.LoadCode, {
    run: (action: LoadCode, state: CodePartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new CodeLoaded([]);
    },

    onError: (action: LoadCode, error) => {
      console.error('Error', error);
      return new CodeLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CodePartialState>
  ) {}
}
