import { Action } from '@ngrx/store';
import { Entity } from './callbacks.reducer';

export enum CallbacksActionTypes {
  LoadCallbacks = '[Callbacks] Load Callbacks',
  CallbacksLoaded = '[Callbacks] Callbacks Loaded',
  CallbacksLoadError = '[Callbacks] Callbacks Load Error'
}

export class LoadCallbacks implements Action {
  readonly type = CallbacksActionTypes.LoadCallbacks;
}

export class CallbacksLoadError implements Action {
  readonly type = CallbacksActionTypes.CallbacksLoadError;
  constructor(public payload: any) {}
}

export class CallbacksLoaded implements Action {
  readonly type = CallbacksActionTypes.CallbacksLoaded;
  constructor(public payload: Entity[]) {}
}

export type CallbacksAction =
  | LoadCallbacks
  | CallbacksLoaded
  | CallbacksLoadError;

export const fromCallbacksActions = {
  LoadCallbacks,
  CallbacksLoaded,
  CallbacksLoadError
};
