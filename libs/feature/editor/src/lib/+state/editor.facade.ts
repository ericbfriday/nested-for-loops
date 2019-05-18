import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { LoadEditor } from './editor.actions';
import { EditorPartialState } from './editor.reducer';
import { editorQuery } from './editor.selectors';

@Injectable()
export class EditorFacade {
  public loaded$ = this.store.pipe(select(editorQuery.getLoaded));
  public allEditor$ = this.store.pipe(select(editorQuery.getAllEditor));
  public selectedEditor$ = this.store.pipe(select(editorQuery.getSelectedEditor));

  constructor(private store: Store<EditorPartialState>) {}

  public loadAll() {
    this.store.dispatch(new LoadEditor());
  }
}
