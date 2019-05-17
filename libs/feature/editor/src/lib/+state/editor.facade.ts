import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { EditorPartialState } from './editor.reducer';
import { editorQuery } from './editor.selectors';
import { LoadEditor } from './editor.actions';

@Injectable()
export class EditorFacade {
  loaded$ = this.store.pipe(select(editorQuery.getLoaded));
  allEditor$ = this.store.pipe(select(editorQuery.getAllEditor));
  selectedEditor$ = this.store.pipe(select(editorQuery.getSelectedEditor));

  constructor(private store: Store<EditorPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadEditor());
  }
}
