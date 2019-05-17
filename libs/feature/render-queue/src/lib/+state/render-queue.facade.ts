import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { RenderQueuePartialState } from './render-queue.reducer';
import { renderQueueQuery } from './render-queue.selectors';
import { LoadRenderQueue } from './render-queue.actions';

@Injectable()
export class RenderQueueFacade {
  loaded$ = this.store.pipe(select(renderQueueQuery.getLoaded));
  allRenderQueue$ = this.store.pipe(select(renderQueueQuery.getAllRenderQueue));
  selectedRenderQueue$ = this.store.pipe(
    select(renderQueueQuery.getSelectedRenderQueue)
  );

  constructor(private store: Store<RenderQueuePartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadRenderQueue());
  }
}
