import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  CALLSTACK_FEATURE_KEY,
  initialState as callStackInitialState,
  callStackReducer
} from './+state/call-stack.reducer';
import { CallStackEffects } from './+state/call-stack.effects';
import { CallStackFacade } from './+state/call-stack.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(CALLSTACK_FEATURE_KEY, callStackReducer, {
      initialState: callStackInitialState
    }),
    EffectsModule.forFeature([CallStackEffects])
  ],
  providers: [CallStackFacade]
})
export class FeatureCallStackModule {}
