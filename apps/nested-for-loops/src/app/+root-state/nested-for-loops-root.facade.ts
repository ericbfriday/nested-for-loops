import { Injectable } from '@angular/core';

import { select, Store, MemoizedSelector } from '@ngrx/store';

import { LoadNestedForLoopsRoot } from './nested-for-loops-root.actions';
import {
  NestedForLoopsRootPartialState,
  Entity
} from './nested-for-loops-root.reducer';
import { nestedForLoopsRootQuery } from './nested-for-loops-root.selectors';
import { Observable } from 'rxjs';

@Injectable()
export class NestedForLoopsRootFacade {
  public loaded$: Observable<boolean> = this.store.pipe(
    select(nestedForLoopsRootQuery.getLoaded)
  );
  public allNestedForLoopsRoot$: Observable<Entity[]> = this.store.pipe(
    select(nestedForLoopsRootQuery.getAllNestedForLoopsRoot)
  );
  public selectedNestedForLoopsRoot$: Observable<Entity> = this.store.pipe(
    select(nestedForLoopsRootQuery.getSelectedNestedForLoopsRoot)
  );

  constructor(private store: Store<NestedForLoopsRootPartialState>) {}

  public loadAll(): void {
    this.store.dispatch(new LoadNestedForLoopsRoot());
  }
}
