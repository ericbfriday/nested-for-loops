import {
  RenderQueueAction,
  RenderQueueActionTypes
} from './render-queue.actions';

export const RENDERQUEUE_FEATURE_KEY = 'renderQueue';

/**
 * Interface for the 'RenderQueue' data used in
 *  - RenderQueueState, and
 *  - renderQueueReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface RenderQueueState {
  list: Entity[]; // list of RenderQueue; analogous to a sql normalized table
  selectedId?: string | number; // which RenderQueue record has been selected
  loaded: boolean; // has the RenderQueue list been loaded
  error?: any; // last none error (if any)
}

export interface RenderQueuePartialState {
  readonly [RENDERQUEUE_FEATURE_KEY]: RenderQueueState;
}

export const initialState: RenderQueueState = {
  list: [],
  loaded: false
};

export function renderQueueReducer(
  state: RenderQueueState = initialState,
  action: RenderQueueAction
): RenderQueueState {
  switch (action.type) {
    case RenderQueueActionTypes.RenderQueueLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
    }
  }
  return state;
}
