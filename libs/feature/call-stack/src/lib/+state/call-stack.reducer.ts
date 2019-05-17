import { CallStackAction, CallStackActionTypes } from './call-stack.actions';

export const CALLSTACK_FEATURE_KEY = 'callStack';

/**
 * Interface for the 'CallStack' data used in
 *  - CallStackState, and
 *  - callStackReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface CallStackState {
  list: Entity[]; // list of CallStack; analogous to a sql normalized table
  selectedId?: string | number; // which CallStack record has been selected
  loaded: boolean; // has the CallStack list been loaded
  error?: any; // last none error (if any)
}

export interface CallStackPartialState {
  readonly [CALLSTACK_FEATURE_KEY]: CallStackState;
}

export const initialState: CallStackState = {
  list: [],
  loaded: false
};

export function callStackReducer(
  state: CallStackState = initialState,
  action: CallStackAction
): CallStackState {
  switch (action.type) {
    case CallStackActionTypes.CallStackLoaded: {
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
