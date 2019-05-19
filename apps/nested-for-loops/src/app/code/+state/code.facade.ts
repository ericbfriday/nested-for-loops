import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { CodePartialState } from './code.reducer';
import { codeQuery } from './code.selectors';
import { LoadCode } from './code.actions';

@Injectable()
export class CodeFacade {
  loaded$ = this.store.pipe(select(codeQuery.getLoaded));
  allCode$ = this.store.pipe(select(codeQuery.getAllCode));
  selectedCode$ = this.store.pipe(select(codeQuery.getSelectedCode));

  constructor(private store: Store<CodePartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadCode());
  }
}
