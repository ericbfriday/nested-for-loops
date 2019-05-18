/**
 * @WhatItDoes declares components and provides limited state to the Render Queue portal.
 */

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
import { QueueComponent } from './queue/queue.component';

/**
 * @WhatItDoes Entry point for the Render Queue components and state.
 * @export FeatureRenderQueueModule
 */
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(RENDERQUEUE_FEATURE_KEY, renderQueueReducer, {
      initialState: renderQueueInitialState
    }),
    EffectsModule.forFeature([RenderQueueEffects])
  ],
  providers: [RenderQueueFacade],
  declarations: [QueueComponent],
  exports: [QueueComponent]
})
// tslint:disable-next-line: no-unnecessary-class
export class FeatureRenderQueueModule {}
