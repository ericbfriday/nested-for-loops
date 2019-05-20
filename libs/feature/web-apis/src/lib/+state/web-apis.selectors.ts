import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WEBAPIS_FEATURE_KEY, WebApisState } from './web-apis.reducer';

// Lookup the 'WebApis' feature state managed by NgRx
const getWebApisState = createFeatureSelector<WebApisState>(
  WEBAPIS_FEATURE_KEY
);

const getLoaded = createSelector(
  getWebApisState,
  (state: WebApisState) => state.loaded
);
const getError = createSelector(
  getWebApisState,
  (state: WebApisState) => state.error
);

const getAllWebApis = createSelector(
  getWebApisState,
  getLoaded,
  (state: WebApisState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getWebApisState,
  (state: WebApisState) => state.selectedId
);
const getSelectedWebApis = createSelector(
  getAllWebApis,
  getSelectedId,
  (webApis, id) => {
    const result = webApis.find(it => it['id'] === id);
    return result ? {...result} : undefined;
  }
);

export const webApisQuery = {
  getLoaded,
  getError,
  getAllWebApis,
  getSelectedWebApis
};
