import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { LoadNestedForLoopsRoot } from './nested-for-loops-root.actions';
import { NestedForLoopsRootPartialState } from './nested-for-loops-root.reducer';
import { nestedForLoopsRootQuery } from './nested-for-loops-root.selectors';

@Injectable()
export class NestedForLoopsRootFacade {
  public loaded$ = this.store.pipe(select(nestedForLoopsRootQuery.getLoaded));
  public allNestedForLoopsRoot$ = this.store.pipe(
    select(nestedForLoopsRootQuery.getAllNestedForLoopsRoot)
  );
  public selectedNestedForLoopsRoot$ = this.store.pipe(
    select(nestedForLoopsRootQuery.getSelectedNestedForLoopsRoot)
  );

  constructor(private store: Store<NestedForLoopsRootPartialState>) {}

  public loadAll() {
    this.store.dispatch(new LoadNestedForLoopsRoot());
  }
}
