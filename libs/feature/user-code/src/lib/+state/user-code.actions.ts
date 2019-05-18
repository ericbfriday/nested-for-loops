import { Action } from '@ngrx/store';
import { Entity } from './user-code.reducer';

export enum UserCodeActionTypes {
  LoadUserCode = '[UserCode] Load UserCode',
  UserCodeLoaded = '[UserCode] UserCode Loaded',
  UserCodeLoadError = '[UserCode] UserCode Load Error'
}

export class LoadUserCode implements Action {
  public readonly type = UserCodeActionTypes.LoadUserCode;
}

export class UserCodeLoadError implements Action {
  public readonly type = UserCodeActionTypes.UserCodeLoadError;
  constructor(public payload: any) {}
}

export class UserCodeLoaded implements Action {
  public readonly type = UserCodeActionTypes.UserCodeLoaded;
  constructor(public payload: Entity[]) {}
}

export type UserCodeAction = LoadUserCode | UserCodeLoaded | UserCodeLoadError;

export const fromUserCodeActions = {
  LoadUserCode,
  UserCodeLoaded,
  UserCodeLoadError
};
