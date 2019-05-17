import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  WEBAPIS_FEATURE_KEY,
  initialState as webApisInitialState,
  webApisReducer
} from './+state/web-apis.reducer';
import { WebApisEffects } from './+state/web-apis.effects';
import { WebApisFacade } from './+state/web-apis.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(WEBAPIS_FEATURE_KEY, webApisReducer, {
      initialState: webApisInitialState
    }),
    EffectsModule.forFeature([WebApisEffects])
  ],
  providers: [WebApisFacade]
})
export class FeatureWebApisModule {}
