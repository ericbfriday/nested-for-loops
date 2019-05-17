import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { WebApisPartialState } from './web-apis.reducer';
import {
  LoadWebApis,
  WebApisLoaded,
  WebApisLoadError,
  WebApisActionTypes
} from './web-apis.actions';

@Injectable()
export class WebApisEffects {
  @Effect() loadWebApis$ = this.dataPersistence.fetch(
    WebApisActionTypes.LoadWebApis,
    {
      run: (action: LoadWebApis, state: WebApisPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new WebApisLoaded([]);
      },

      onError: (action: LoadWebApis, error) => {
        console.error('Error', error);
        return new WebApisLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<WebApisPartialState>
  ) {}
}
