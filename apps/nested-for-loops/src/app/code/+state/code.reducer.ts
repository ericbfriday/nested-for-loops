import { CodeAction, CodeActionTypes } from './code.actions';

export const CODE_FEATURE_KEY: string = 'code';

/**
 * Interface for the 'Code' data used in
 *  - CodeState, and
 *  - codeReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface CodeState {
  list: Entity[]; // list of Code; analogous to a sql normalized table
  selectedId?: string | number; // which Code record has been selected
  loaded: boolean; // has the Code list been loaded
  error?: any; // last none error (if any)
}

export interface CodePartialState {
  // readonly [CODE_FEATURE_KEY]: CodeState;
}

export const initialState: CodeState = {
  list: [],
  loaded: false
};

export function codeReducer(
  state: CodeState = initialState,
  action: CodeAction
): CodeState {
  switch (action.type) {
    case CodeActionTypes.CodeLoaded: {
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
