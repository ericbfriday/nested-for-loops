import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { EditorPartialState } from './editor.reducer';
import {
  LoadEditor,
  EditorLoaded,
  EditorLoadError,
  EditorActionTypes
} from './editor.actions';

@Injectable()
export class EditorEffects {
  @Effect() loadEditor$ = this.dataPersistence.fetch(
    EditorActionTypes.LoadEditor,
    {
      run: (action: LoadEditor, state: EditorPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new EditorLoaded([]);
      },

      onError: (action: LoadEditor, error) => {
        console.error('Error', error);
        return new EditorLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<EditorPartialState>
  ) {}
}
