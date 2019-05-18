import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EDITOR_FEATURE_KEY, EditorState } from './editor.reducer';

// Lookup the 'Editor' feature state managed by NgRx
const getEditorState = createFeatureSelector<EditorState>(EDITOR_FEATURE_KEY);

const getLoaded = createSelector(
  getEditorState,
  (state: EditorState) => state.loaded
);
const getError = createSelector(
  getEditorState,
  (state: EditorState) => state.error
);

const getAllEditor = createSelector(
  getEditorState,
  getLoaded,
  (state: EditorState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getEditorState,
  (state: EditorState) => state.selectedId
);
const getSelectedEditor = createSelector(
  getAllEditor,
  getSelectedId,
  (editor, id) => {
    const result = editor.find(it => it.id === id);
    return result ? {...result} : undefined;
  }
);

export const editorQuery = {
  getLoaded,
  getError,
  getAllEditor,
  getSelectedEditor
};
