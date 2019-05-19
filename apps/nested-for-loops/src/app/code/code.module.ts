import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatureJstsEditorModule } from '@friday-friday/feature/jsts-editor';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CodeEffects } from './+state/code.effects';
import { CodeFacade } from './+state/code.facade';
import {
  CODE_FEATURE_KEY,
  codeReducer,
  initialState as codeInitialState
} from './+state/code.reducer';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(CODE_FEATURE_KEY, codeReducer, {
      initialState: codeInitialState
    }),
    EffectsModule.forFeature([CodeEffects]),
    // specifics/custom
    FeatureJstsEditorModule
  ],
  providers: [CodeFacade],
  exports: [EditorComponent]
})
export class CodeModule {}
