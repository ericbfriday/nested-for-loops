import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  RENDERQUEUE_FEATURE_KEY,
  initialState as renderQueueInitialState,
  renderQueueReducer
} from './+state/render-queue.reducer';
import { RenderQueueEffects } from './+state/render-queue.effects';
import { RenderQueueFacade } from './+state/render-queue.facade';

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
