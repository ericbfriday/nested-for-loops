import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  EDITOR_FEATURE_KEY,
  initialState as editorInitialState,
  editorReducer
} from './+state/editor.reducer';
import { EditorEffects } from './+state/editor.effects';
import { EditorFacade } from './+state/editor.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(EDITOR_FEATURE_KEY, editorReducer, {
      initialState: editorInitialState
    }),
    EffectsModule.forFeature([EditorEffects])
  ],
  providers: [EditorFacade]
})
export class FeatureEditorModule {}
