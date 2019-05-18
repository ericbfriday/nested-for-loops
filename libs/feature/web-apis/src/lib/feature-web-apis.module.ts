import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { WebApisEffects } from './+state/web-apis.effects';
import { WebApisFacade } from './+state/web-apis.facade';
import {
  initialState as webApisInitialState,
  WEBAPIS_FEATURE_KEY,
  webApisReducer
} from './+state/web-apis.reducer';

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
