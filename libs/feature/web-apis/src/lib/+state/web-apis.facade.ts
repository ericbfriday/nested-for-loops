import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { LoadWebApis } from './web-apis.actions';
import { WebApisPartialState } from './web-apis.reducer';
import { webApisQuery } from './web-apis.selectors';

@Injectable()
export class WebApisFacade {
  public loaded$ = this.store.pipe(select(webApisQuery.getLoaded));
  public allWebApis$ = this.store.pipe(select(webApisQuery.getAllWebApis));
  public selectedWebApis$ = this.store.pipe(select(webApisQuery.getSelectedWebApis));

  constructor(private store: Store<WebApisPartialState>) {}

  public loadAll() {
    this.store.dispatch(new LoadWebApis());
  }
}
