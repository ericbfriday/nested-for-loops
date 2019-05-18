import { Action } from '@ngrx/store';
import { Entity } from './nested-for-loops-root.reducer';

export enum NestedForLoopsRootActionTypes {
  LoadNestedForLoopsRoot = '[NestedForLoopsRoot] Load NestedForLoopsRoot',
  NestedForLoopsRootLoaded = '[NestedForLoopsRoot] NestedForLoopsRoot Loaded',
  NestedForLoopsRootLoadError = '[NestedForLoopsRoot] NestedForLoopsRoot Load Error'
}

export class LoadNestedForLoopsRoot implements Action {
  readonly type = NestedForLoopsRootActionTypes.LoadNestedForLoopsRoot;
}

export class NestedForLoopsRootLoadError implements Action {
  readonly type = NestedForLoopsRootActionTypes.NestedForLoopsRootLoadError;
  constructor(public payload: any) {}
}

export class NestedForLoopsRootLoaded implements Action {
  readonly type = NestedForLoopsRootActionTypes.NestedForLoopsRootLoaded;
  constructor(public payload: Entity[]) {}
}

export type NestedForLoopsRootAction =
  | LoadNestedForLoopsRoot
  | NestedForLoopsRootLoaded
  | NestedForLoopsRootLoadError;

export const fromNestedForLoopsRootActions = {
  LoadNestedForLoopsRoot,
  NestedForLoopsRootLoaded,
  NestedForLoopsRootLoadError
};
