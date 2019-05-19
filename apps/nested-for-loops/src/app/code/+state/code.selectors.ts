import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CODE_FEATURE_KEY, CodeState } from './code.reducer';

// Lookup the 'Code' feature state managed by NgRx
const getCodeState = createFeatureSelector<CodeState>(CODE_FEATURE_KEY);

const getLoaded = createSelector(
  getCodeState,
  (state: CodeState) => state.loaded
);
const getError = createSelector(
  getCodeState,
  (state: CodeState) => state.error
);

const getAllCode = createSelector(
  getCodeState,
  getLoaded,
  (state: CodeState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getCodeState,
  (state: CodeState) => state.selectedId
);
const getSelectedCode = createSelector(
  getAllCode,
  getSelectedId,
  (code, id) => {
    const result = code.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const codeQuery = {
  getLoaded,
  getError,
  getAllCode,
  getSelectedCode
};
