import { Action } from '@ngrx/store';
import { Entity } from './code.reducer';

export enum CodeActionTypes {
  LoadCode = '[Code] Load Code',
  CodeLoaded = '[Code] Code Loaded',
  CodeLoadError = '[Code] Code Load Error'
}

export class LoadCode implements Action {
  readonly type = CodeActionTypes.LoadCode;
}

export class CodeLoadError implements Action {
  readonly type = CodeActionTypes.CodeLoadError;
  constructor(public payload: any) {}
}

export class CodeLoaded implements Action {
  readonly type = CodeActionTypes.CodeLoaded;
  constructor(public payload: Entity[]) {}
}

export type CodeAction = LoadCode | CodeLoaded | CodeLoadError;

export const fromCodeActions = {
  LoadCode,
  CodeLoaded,
  CodeLoadError
};
