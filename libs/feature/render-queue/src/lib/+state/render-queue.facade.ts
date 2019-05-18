import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { LoadRenderQueue } from './render-queue.actions';
import { RenderQueuePartialState } from './render-queue.reducer';
import { renderQueueQuery } from './render-queue.selectors';

@Injectable()
export class RenderQueueFacade {
  public loaded$ = this.store.pipe(select(renderQueueQuery.getLoaded));
  public allRenderQueue$ = this.store.pipe(select(renderQueueQuery.getAllRenderQueue));
  public selectedRenderQueue$ = this.store.pipe(
    select(renderQueueQuery.getSelectedRenderQueue)
  );

  constructor(private store: Store<RenderQueuePartialState>) {}

  public loadAll() {
    this.store.dispatch(new LoadRenderQueue());
  }
}
