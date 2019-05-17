import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { SettingsPartialState } from './settings.reducer';
import { settingsQuery } from './settings.selectors';
import { LoadSettings } from './settings.actions';

@Injectable()
export class SettingsFacade {
  loaded$ = this.store.pipe(select(settingsQuery.getLoaded));
  allSettings$ = this.store.pipe(select(settingsQuery.getAllSettings));
  selectedSettings$ = this.store.pipe(
    select(settingsQuery.getSelectedSettings)
  );

  constructor(private store: Store<SettingsPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadSettings());
  }
}
