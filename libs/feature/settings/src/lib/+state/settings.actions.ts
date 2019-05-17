import { Action } from '@ngrx/store';
import { Entity } from './settings.reducer';

export enum SettingsActionTypes {
  LoadSettings = '[Settings] Load Settings',
  SettingsLoaded = '[Settings] Settings Loaded',
  SettingsLoadError = '[Settings] Settings Load Error'
}

export class LoadSettings implements Action {
  readonly type = SettingsActionTypes.LoadSettings;
}

export class SettingsLoadError implements Action {
  readonly type = SettingsActionTypes.SettingsLoadError;
  constructor(public payload: any) {}
}

export class SettingsLoaded implements Action {
  readonly type = SettingsActionTypes.SettingsLoaded;
  constructor(public payload: Entity[]) {}
}

export type SettingsAction = LoadSettings | SettingsLoaded | SettingsLoadError;

export const fromSettingsActions = {
  LoadSettings,
  SettingsLoaded,
  SettingsLoadError
};
