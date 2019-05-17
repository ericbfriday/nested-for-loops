import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  CALLBACKS_FEATURE_KEY,
  initialState as callbacksInitialState,
  callbacksReducer
} from './+state/callbacks.reducer';
import { CallbacksEffects } from './+state/callbacks.effects';
import { CallbacksFacade } from './+state/callbacks.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(CALLBACKS_FEATURE_KEY, callbacksReducer, {
      initialState: callbacksInitialState
    }),
    EffectsModule.forFeature([CallbacksEffects])
  ],
  providers: [CallbacksFacade]
})
export class FeatureCallbacksModule {}
