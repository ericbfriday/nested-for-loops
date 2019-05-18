import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { LoadCallStack } from './call-stack.actions';
import { CallStackPartialState } from './call-stack.reducer';
import { callStackQuery } from './call-stack.selectors';

@Injectable()
export class CallStackFacade {
  public loaded$ = this.store.pipe(select(callStackQuery.getLoaded));
  public allCallStack$ = this.store.pipe(select(callStackQuery.getAllCallStack));
  public selectedCallStack$ = this.store.pipe(
    select(callStackQuery.getSelectedCallStack)
  );

  constructor(private store: Store<CallStackPartialState>) {}

  public loadAll() {
    this.store.dispatch(new LoadCallStack());
  }
}
