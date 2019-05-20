import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SETTINGS_FEATURE_KEY, SettingsState } from './settings.reducer';

// Lookup the 'Settings' feature state managed by NgRx
const getSettingsState = createFeatureSelector<SettingsState>(
  SETTINGS_FEATURE_KEY
);

const getLoaded = createSelector(
  getSettingsState,
  (state: SettingsState) => state.loaded
);
const getError = createSelector(
  getSettingsState,
  (state: SettingsState) => state.error
);

const getAllSettings = createSelector(
  getSettingsState,
  getLoaded,
  (state: SettingsState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getSettingsState,
  (state: SettingsState) => state.selectedId
);
const getSelectedSettings = createSelector(
  getAllSettings,
  getSelectedId,
  (settings, id) => {
    const result = settings.find(it => it['id'] === id);
    return result ? {...result} : undefined;
  }
);

export const settingsQuery = {
  getLoaded,
  getError,
  getAllSettings,
  getSelectedSettings
};
