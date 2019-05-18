import { WebApisAction, WebApisActionTypes } from './web-apis.actions';

export const WEBAPIS_FEATURE_KEY = 'webApis';

/**
 * Interface for the 'WebApis' data used in
 *  - WebApisState, and
 *  - webApisReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface WebApisState {
  list: Entity[]; // list of WebApis; analogous to a sql normalized table
  selectedId?: string | number; // which WebApis record has been selected
  loaded: boolean; // has the WebApis list been loaded
  error?: any; // last none error (if any)
}

export interface WebApisPartialState {
  readonly [WEBAPIS_FEATURE_KEY]: WebApisState;
}

export const initialState: WebApisState = {
  list: [],
  loaded: false
};

export function webApisReducer(
  state: WebApisState = initialState,
  action: WebApisAction
): WebApisState {
  switch (action.type) {
    case WebApisActionTypes.WebApisLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
    }
  }
  return state;
}
