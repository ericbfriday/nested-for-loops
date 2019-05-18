import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USERCODE_FEATURE_KEY, UserCodeState } from './user-code.reducer';

// Lookup the 'UserCode' feature state managed by NgRx
const getUserCodeState = createFeatureSelector<UserCodeState>(
  USERCODE_FEATURE_KEY
);

const getLoaded = createSelector(
  getUserCodeState,
  (state: UserCodeState) => state.loaded
);
const getError = createSelector(
  getUserCodeState,
  (state: UserCodeState) => state.error
);

const getAllUserCode = createSelector(
  getUserCodeState,
  getLoaded,
  (state: UserCodeState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getUserCodeState,
  (state: UserCodeState) => state.selectedId
);
const getSelectedUserCode = createSelector(
  getAllUserCode,
  getSelectedId,
  (userCode, id) => {
    const result = userCode.find(it => it.id === id);
    return result ? {...result} : undefined;
  }
);

export const userCodeQuery = {
  getLoaded,
  getError,
  getAllUserCode,
  getSelectedUserCode
};
