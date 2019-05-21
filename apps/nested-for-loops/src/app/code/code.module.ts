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
import { AceEditorModule } from './editor/ace/module';
import { AceExampleComponent } from './editor/ace/example/app.component';

@NgModule({
  declarations: [EditorComponent, AceExampleComponent],
  imports: [
    CommonModule,
    AceEditorModule,
    StoreModule.forFeature(CODE_FEATURE_KEY, codeReducer, {
      initialState: codeInitialState
    }),
    EffectsModule.forFeature([CodeEffects]),
    // specifics/custom
    FeatureJstsEditorModule
  ],
  providers: [CodeFacade],
  exports: [AceEditorModule, EditorComponent]
})
export class CodeModule {}
