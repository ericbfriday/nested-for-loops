import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { LoadUserCode } from './user-code.actions';
import { UserCodePartialState } from './user-code.reducer';
import { userCodeQuery } from './user-code.selectors';

@Injectable()
export class UserCodeFacade {
  public loaded$ = this.store.pipe(select(userCodeQuery.getLoaded));
  public allUserCode$ = this.store.pipe(select(userCodeQuery.getAllUserCode));
  public selectedUserCode$ = this.store.pipe(
    select(userCodeQuery.getSelectedUserCode)
  );

  constructor(private store: Store<UserCodePartialState>) {}

  public loadAll() {
    this.store.dispatch(new LoadUserCode());
  }
}
