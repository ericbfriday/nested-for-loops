import { Action } from '@ngrx/store';
import { Entity } from './call-stack.reducer';

export enum CallStackActionTypes {
  LoadCallStack = '[CallStack] Load CallStack',
  CallStackLoaded = '[CallStack] CallStack Loaded',
  CallStackLoadError = '[CallStack] CallStack Load Error'
}

export class LoadCallStack implements Action {
  readonly type = CallStackActionTypes.LoadCallStack;
}

export class CallStackLoadError implements Action {
  readonly type = CallStackActionTypes.CallStackLoadError;
  constructor(public payload: any) {}
}

export class CallStackLoaded implements Action {
  readonly type = CallStackActionTypes.CallStackLoaded;
  constructor(public payload: Entity[]) {}
}

export type CallStackAction =
  | LoadCallStack
  | CallStackLoaded
  | CallStackLoadError;

export const fromCallStackActions = {
  LoadCallStack,
  CallStackLoaded,
  CallStackLoadError
};
