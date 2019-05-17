import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { WebApisPartialState } from './web-apis.reducer';
import { webApisQuery } from './web-apis.selectors';
import { LoadWebApis } from './web-apis.actions';

@Injectable()
export class WebApisFacade {
  loaded$ = this.store.pipe(select(webApisQuery.getLoaded));
  allWebApis$ = this.store.pipe(select(webApisQuery.getAllWebApis));
  selectedWebApis$ = this.store.pipe(select(webApisQuery.getSelectedWebApis));

  constructor(private store: Store<WebApisPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadWebApis());
  }
}
