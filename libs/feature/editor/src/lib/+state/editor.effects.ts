import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import {
  EditorActionTypes,
  EditorLoaded,
  EditorLoadError,
  LoadEditor
} from './editor.actions';
import { EditorPartialState } from './editor.reducer';

@Injectable()
export class EditorEffects {
  @Effect() public loadEditor$ = this.dataPersistence.fetch(
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
