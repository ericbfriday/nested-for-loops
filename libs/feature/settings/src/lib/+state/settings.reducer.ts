import { SettingsAction, SettingsActionTypes } from './settings.actions';

export const SETTINGS_FEATURE_KEY = 'settings';

/**
 * Interface for the 'Settings' data used in
 *  - SettingsState, and
 *  - settingsReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface SettingsState {
  list: Entity[]; // list of Settings; analogous to a sql normalized table
  selectedId?: string | number; // which Settings record has been selected
  loaded: boolean; // has the Settings list been loaded
  error?: any; // last none error (if any)
}

export interface SettingsPartialState {
  readonly [SETTINGS_FEATURE_KEY]: SettingsState;
}

export const initialState: SettingsState = {
  list: [],
  loaded: false
};

export function settingsReducer(
  state: SettingsState = initialState,
  action: SettingsAction
): SettingsState {
  switch (action.type) {
    case SettingsActionTypes.SettingsLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
