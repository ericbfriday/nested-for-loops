import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { RenderQueuePartialState } from './render-queue.reducer';
import {
  LoadRenderQueue,
  RenderQueueLoaded,
  RenderQueueLoadError,
  RenderQueueActionTypes
} from './render-queue.actions';

@Injectable()
export class RenderQueueEffects {
  @Effect() loadRenderQueue$ = this.dataPersistence.fetch(
    RenderQueueActionTypes.LoadRenderQueue,
    {
      run: (action: LoadRenderQueue, state: RenderQueuePartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new RenderQueueLoaded([]);
      },

      onError: (action: LoadRenderQueue, error) => {
        console.error('Error', error);
        return new RenderQueueLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<RenderQueuePartialState>
  ) {}
}
