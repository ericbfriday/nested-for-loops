import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CallbacksEffects } from './+state/callbacks.effects';
import { CallbacksFacade } from './+state/callbacks.facade';
import {
  CALLBACKS_FEATURE_KEY,
  callbacksReducer,
  initialState as callbacksInitialState
} from './+state/callbacks.reducer';
import { CbItemComponent } from './cb-item/cb-item.component';
import { CbQueueComponent } from './cb-queue/cb-queue.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(CALLBACKS_FEATURE_KEY, callbacksReducer, {
      initialState: callbacksInitialState
    }),
    EffectsModule.forFeature([CallbacksEffects])
  ],
  providers: [CallbacksFacade],
  declarations: [CbItemComponent, CbQueueComponent],
  exports: [CbItemComponent, CbQueueComponent]
})
export class FeatureCallbacksModule {}
