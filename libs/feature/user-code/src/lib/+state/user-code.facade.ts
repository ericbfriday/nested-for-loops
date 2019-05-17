import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { UserCodePartialState } from './user-code.reducer';
import { userCodeQuery } from './user-code.selectors';
import { LoadUserCode } from './user-code.actions';

@Injectable()
export class UserCodeFacade {
  loaded$ = this.store.pipe(select(userCodeQuery.getLoaded));
  allUserCode$ = this.store.pipe(select(userCodeQuery.getAllUserCode));
  selectedUserCode$ = this.store.pipe(
    select(userCodeQuery.getSelectedUserCode)
  );

  constructor(private store: Store<UserCodePartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadUserCode());
  }
}
