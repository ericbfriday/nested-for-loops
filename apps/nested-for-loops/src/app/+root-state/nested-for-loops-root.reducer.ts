import {
  NestedForLoopsRootAction,
  NestedForLoopsRootActionTypes
} from './nested-for-loops-root.actions';

export const NESTEDFORLOOPSROOT_FEATURE_KEY = 'nestedForLoopsRoot';

/**
 * Interface for the 'NestedForLoopsRoot' data used in
 *  - NestedForLoopsRootState, and
 *  - nestedForLoopsRootReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface NestedForLoopsRootState {
  list: Entity[]; // list of NestedForLoopsRoot; analogous to a sql normalized table
  selectedId?: string | number; // which NestedForLoopsRoot record has been selected
  loaded: boolean; // has the NestedForLoopsRoot list been loaded
  error?: any; // last none error (if any)
}

export interface NestedForLoopsRootPartialState {
  readonly [NESTEDFORLOOPSROOT_FEATURE_KEY]: NestedForLoopsRootState;
}

export const initialState: NestedForLoopsRootState = {
  list: [],
  loaded: false
};

export function nestedForLoopsRootReducer(
  state: NestedForLoopsRootState = initialState,
  action: NestedForLoopsRootAction
): NestedForLoopsRootState {
  switch (action.type) {
    case NestedForLoopsRootActionTypes.NestedForLoopsRootLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
    }
  }
  return state;
}
