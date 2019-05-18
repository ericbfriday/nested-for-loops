import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { NestedForLoopsRootPartialState } from './nested-for-loops-root.reducer';
import { nestedForLoopsRootQuery } from './nested-for-loops-root.selectors';
import { LoadNestedForLoopsRoot } from './nested-for-loops-root.actions';

@Injectable()
export class NestedForLoopsRootFacade {
  loaded$ = this.store.pipe(select(nestedForLoopsRootQuery.getLoaded));
  allNestedForLoopsRoot$ = this.store.pipe(
    select(nestedForLoopsRootQuery.getAllNestedForLoopsRoot)
  );
  selectedNestedForLoopsRoot$ = this.store.pipe(
    select(nestedForLoopsRootQuery.getSelectedNestedForLoopsRoot)
  );

  constructor(private store: Store<NestedForLoopsRootPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadNestedForLoopsRoot());
  }
}
