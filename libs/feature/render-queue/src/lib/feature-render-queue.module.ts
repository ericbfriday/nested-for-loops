import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RenderQueueEffects } from './+state/render-queue.effects';
import { RenderQueueFacade } from './+state/render-queue.facade';
import {
  initialState as renderQueueInitialState,
  RENDERQUEUE_FEATURE_KEY,
  renderQueueReducer
} from './+state/render-queue.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(RENDERQUEUE_FEATURE_KEY, renderQueueReducer, {
      initialState: renderQueueInitialState
    }),
    EffectsModule.forFeature([RenderQueueEffects])
  ],
  providers: [RenderQueueFacade]
})
export class FeatureRenderQueueModule {}
