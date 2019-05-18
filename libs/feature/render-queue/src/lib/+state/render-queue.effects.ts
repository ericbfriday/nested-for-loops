import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import {
  LoadRenderQueue,
  RenderQueueActionTypes,
  RenderQueueLoaded,
  RenderQueueLoadError
} from './render-queue.actions';
import { RenderQueuePartialState } from './render-queue.reducer';

@Injectable()
export class RenderQueueEffects {
  @Effect() public loadRenderQueue$ = this.dataPersistence.fetch(
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
