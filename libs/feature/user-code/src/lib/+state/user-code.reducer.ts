import { UserCodeAction, UserCodeActionTypes } from './user-code.actions';

export const USERCODE_FEATURE_KEY = 'userCode';

/**
 * Interface for the 'UserCode' data used in
 *  - UserCodeState, and
 *  - userCodeReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface UserCodeState {
  list: Entity[]; // list of UserCode; analogous to a sql normalized table
  selectedId?: string | number; // which UserCode record has been selected
  loaded: boolean; // has the UserCode list been loaded
  error?: any; // last none error (if any)
}

export interface UserCodePartialState {
  readonly [USERCODE_FEATURE_KEY]: UserCodeState;
}

export const initialState: UserCodeState = {
  list: [],
  loaded: false
};

export function userCodeReducer(
  state: UserCodeState = initialState,
  action: UserCodeAction
): UserCodeState {
  switch (action.type) {
    case UserCodeActionTypes.UserCodeLoaded: {
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
