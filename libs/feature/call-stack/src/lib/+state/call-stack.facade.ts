import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { CallStackPartialState } from './call-stack.reducer';
import { callStackQuery } from './call-stack.selectors';
import { LoadCallStack } from './call-stack.actions';

@Injectable()
export class CallStackFacade {
  loaded$ = this.store.pipe(select(callStackQuery.getLoaded));
  allCallStack$ = this.store.pipe(select(callStackQuery.getAllCallStack));
  selectedCallStack$ = this.store.pipe(
    select(callStackQuery.getSelectedCallStack)
  );

  constructor(private store: Store<CallStackPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadCallStack());
  }
}
