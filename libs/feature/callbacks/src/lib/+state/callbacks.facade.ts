import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { LoadCallbacks } from './callbacks.actions';
import { CallbacksPartialState } from './callbacks.reducer';
import { callbacksQuery } from './callbacks.selectors';

@Injectable()
export class CallbacksFacade {
  public loaded$ = this.store.pipe(select(callbacksQuery.getLoaded));
  public allCallbacks$ = this.store.pipe(select(callbacksQuery.getAllCallbacks));
  public selectedCallbacks$ = this.store.pipe(
    select(callbacksQuery.getSelectedCallbacks)
  );

  constructor(private store: Store<CallbacksPartialState>) {}

  public loadAll() {
    this.store.dispatch(new LoadCallbacks());
  }
}
