import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CALLBACKS_FEATURE_KEY, CallbacksState } from './callbacks.reducer';

// Lookup the 'Callbacks' feature state managed by NgRx
const getCallbacksState = createFeatureSelector<CallbacksState>(
  CALLBACKS_FEATURE_KEY
);

const getLoaded = createSelector(
  getCallbacksState,
  (state: CallbacksState) => state.loaded
);
const getError = createSelector(
  getCallbacksState,
  (state: CallbacksState) => state.error
);

const getAllCallbacks = createSelector(
  getCallbacksState,
  getLoaded,
  (state: CallbacksState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getCallbacksState,
  (state: CallbacksState) => state.selectedId
);
const getSelectedCallbacks = createSelector(
  getAllCallbacks,
  getSelectedId,
  (callbacks, id) => {
    const result = callbacks.find(it => it.id === id);
    return result ? {...result} : undefined;
  }
);

export const callbacksQuery = {
  getLoaded,
  getError,
  getAllCallbacks,
  getSelectedCallbacks
};
