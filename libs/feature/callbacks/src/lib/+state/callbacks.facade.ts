import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { CallbacksPartialState } from './callbacks.reducer';
import { callbacksQuery } from './callbacks.selectors';
import { LoadCallbacks } from './callbacks.actions';

@Injectable()
export class CallbacksFacade {
  loaded$ = this.store.pipe(select(callbacksQuery.getLoaded));
  allCallbacks$ = this.store.pipe(select(callbacksQuery.getAllCallbacks));
  selectedCallbacks$ = this.store.pipe(
    select(callbacksQuery.getSelectedCallbacks)
  );

  constructor(private store: Store<CallbacksPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadCallbacks());
  }
}
