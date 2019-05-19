import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CodeEffects } from './+state/code.effects';
import { CodeFacade } from './+state/code.facade';
import {
  CODE_FEATURE_KEY,
  codeReducer,
  initialState as codeInitialState
} from './+state/code.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(CODE_FEATURE_KEY, codeReducer, {
      initialState: codeInitialState
    }),
    EffectsModule.forFeature([CodeEffects])
  ],
  providers: [CodeFacade]
})
export class CodeModule {}
