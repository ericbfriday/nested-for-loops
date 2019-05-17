import { EditorAction, EditorActionTypes } from './editor.actions';

export const EDITOR_FEATURE_KEY = 'editor';

/**
 * Interface for the 'Editor' data used in
 *  - EditorState, and
 *  - editorReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface EditorState {
  list: Entity[]; // list of Editor; analogous to a sql normalized table
  selectedId?: string | number; // which Editor record has been selected
  loaded: boolean; // has the Editor list been loaded
  error?: any; // last none error (if any)
}

export interface EditorPartialState {
  readonly [EDITOR_FEATURE_KEY]: EditorState;
}

export const initialState: EditorState = {
  list: [],
  loaded: false
};

export function editorReducer(
  state: EditorState = initialState,
  action: EditorAction
): EditorState {
  switch (action.type) {
    case EditorActionTypes.EditorLoaded: {
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
