import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CALLSTACK_FEATURE_KEY, CallStackState } from './call-stack.reducer';

// Lookup the 'CallStack' feature state managed by NgRx
const getCallStackState = createFeatureSelector<CallStackState>(
  CALLSTACK_FEATURE_KEY
);

const getLoaded = createSelector(
  getCallStackState,
  (state: CallStackState) => state.loaded
);
const getError = createSelector(
  getCallStackState,
  (state: CallStackState) => state.error
);

const getAllCallStack = createSelector(
  getCallStackState,
  getLoaded,
  (state: CallStackState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getCallStackState,
  (state: CallStackState) => state.selectedId
);
const getSelectedCallStack = createSelector(
  getAllCallStack,
  getSelectedId,
  (callStack, id) => {
    const result = callStack.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const callStackQuery = {
  getLoaded,
  getError,
  getAllCallStack,
  getSelectedCallStack
};
