import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { LoadSettings } from './settings.actions';
import { SettingsPartialState } from './settings.reducer';
import { settingsQuery } from './settings.selectors';

@Injectable()
export class SettingsFacade {
  public loaded$ = this.store.pipe(select(settingsQuery.getLoaded));
  public allSettings$ = this.store.pipe(select(settingsQuery.getAllSettings));
  public selectedSettings$ = this.store.pipe(
    select(settingsQuery.getSelectedSettings)
  );

  constructor(private store: Store<SettingsPartialState>) {}

  public loadAll() {
    this.store.dispatch(new LoadSettings());
  }
}
