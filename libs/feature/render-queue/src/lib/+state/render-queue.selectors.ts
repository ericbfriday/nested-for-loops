import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  RENDERQUEUE_FEATURE_KEY,
  RenderQueueState
} from './render-queue.reducer';

// Lookup the 'RenderQueue' feature state managed by NgRx
const getRenderQueueState = createFeatureSelector<RenderQueueState>(
  RENDERQUEUE_FEATURE_KEY
);

const getLoaded = createSelector(
  getRenderQueueState,
  (state: RenderQueueState) => state.loaded
);
const getError = createSelector(
  getRenderQueueState,
  (state: RenderQueueState) => state.error
);

const getAllRenderQueue = createSelector(
  getRenderQueueState,
  getLoaded,
  (state: RenderQueueState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getRenderQueueState,
  (state: RenderQueueState) => state.selectedId
);
const getSelectedRenderQueue = createSelector(
  getAllRenderQueue,
  getSelectedId,
  (renderQueue, id) => {
    const result = renderQueue.find(it => it['id'] === id);
    return result ? {...result} : undefined;
  }
);

export const renderQueueQuery = {
  getLoaded,
  getError,
  getAllRenderQueue,
  getSelectedRenderQueue
};
