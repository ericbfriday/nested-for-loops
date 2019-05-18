import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  NESTEDFORLOOPSROOT_FEATURE_KEY,
  NestedForLoopsRootState
} from './nested-for-loops-root.reducer';

// Lookup the 'NestedForLoopsRoot' feature state managed by NgRx
const getNestedForLoopsRootState = createFeatureSelector<
  NestedForLoopsRootState
>(NESTEDFORLOOPSROOT_FEATURE_KEY);

const getLoaded = createSelector(
  getNestedForLoopsRootState,
  (state: NestedForLoopsRootState) => state.loaded
);
const getError = createSelector(
  getNestedForLoopsRootState,
  (state: NestedForLoopsRootState) => state.error
);

const getAllNestedForLoopsRoot = createSelector(
  getNestedForLoopsRootState,
  getLoaded,
  (state: NestedForLoopsRootState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getNestedForLoopsRootState,
  (state: NestedForLoopsRootState) => state.selectedId
);
const getSelectedNestedForLoopsRoot = createSelector(
  getAllNestedForLoopsRoot,
  getSelectedId,
  (nestedForLoopsRoot, id) => {
    const result = nestedForLoopsRoot.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const nestedForLoopsRootQuery = {
  getLoaded,
  getError,
  getAllNestedForLoopsRoot,
  getSelectedNestedForLoopsRoot
};
