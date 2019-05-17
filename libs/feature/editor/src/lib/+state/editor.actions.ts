import { Action } from '@ngrx/store';
import { Entity } from './editor.reducer';

export enum EditorActionTypes {
  LoadEditor = '[Editor] Load Editor',
  EditorLoaded = '[Editor] Editor Loaded',
  EditorLoadError = '[Editor] Editor Load Error'
}

export class LoadEditor implements Action {
  readonly type = EditorActionTypes.LoadEditor;
}

export class EditorLoadError implements Action {
  readonly type = EditorActionTypes.EditorLoadError;
  constructor(public payload: any) {}
}

export class EditorLoaded implements Action {
  readonly type = EditorActionTypes.EditorLoaded;
  constructor(public payload: Entity[]) {}
}

export type EditorAction = LoadEditor | EditorLoaded | EditorLoadError;

export const fromEditorActions = {
  LoadEditor,
  EditorLoaded,
  EditorLoadError
};
