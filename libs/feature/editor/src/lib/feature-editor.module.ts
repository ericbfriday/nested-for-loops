import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EditorEffects } from './+state/editor.effects';
import { EditorFacade } from './+state/editor.facade';
import {
  EDITOR_FEATURE_KEY,
  editorReducer,
  initialState as editorInitialState
} from './+state/editor.reducer';

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
