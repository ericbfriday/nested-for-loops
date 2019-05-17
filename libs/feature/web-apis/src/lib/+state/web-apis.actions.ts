import { Action } from '@ngrx/store';
import { Entity } from './web-apis.reducer';

export enum WebApisActionTypes {
  LoadWebApis = '[WebApis] Load WebApis',
  WebApisLoaded = '[WebApis] WebApis Loaded',
  WebApisLoadError = '[WebApis] WebApis Load Error'
}

export class LoadWebApis implements Action {
  readonly type = WebApisActionTypes.LoadWebApis;
}

export class WebApisLoadError implements Action {
  readonly type = WebApisActionTypes.WebApisLoadError;
  constructor(public payload: any) {}
}

export class WebApisLoaded implements Action {
  readonly type = WebApisActionTypes.WebApisLoaded;
  constructor(public payload: Entity[]) {}
}

export type WebApisAction = LoadWebApis | WebApisLoaded | WebApisLoadError;

export const fromWebApisActions = {
  LoadWebApis,
  WebApisLoaded,
  WebApisLoadError
};
