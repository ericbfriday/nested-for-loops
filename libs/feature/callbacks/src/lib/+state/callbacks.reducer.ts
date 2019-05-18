import { CallbacksAction, CallbacksActionTypes } from './callbacks.actions';

export const CALLBACKS_FEATURE_KEY = 'callbacks';

/**
 * Interface for the 'Callbacks' data used in
 *  - CallbacksState, and
 *  - callbacksReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface CallbacksState {
  list: Entity[]; // list of Callbacks; analogous to a sql normalized table
  selectedId?: string | number; // which Callbacks record has been selected
  loaded: boolean; // has the Callbacks list been loaded
  error?: any; // last none error (if any)
}

export interface CallbacksPartialState {
  readonly [CALLBACKS_FEATURE_KEY]: CallbacksState;
}

export const initialState: CallbacksState = {
  list: [],
  loaded: false
};

export function callbacksReducer(
  state: CallbacksState = initialState,
  action: CallbacksAction
): CallbacksState {
  switch (action.type) {
    case CallbacksActionTypes.CallbacksLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
    }
  }
  return state;
}
