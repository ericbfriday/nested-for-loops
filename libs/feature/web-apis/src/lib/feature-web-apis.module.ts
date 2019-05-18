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
import { QueryComponent } from './query/query.component';
import { TimerComponent } from './timer/timer.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(WEBAPIS_FEATURE_KEY, webApisReducer, {
      initialState: webApisInitialState
    }),
    EffectsModule.forFeature([WebApisEffects])
  ],
  providers: [WebApisFacade],
  declarations: [QueryComponent, TimerComponent, ContainerComponent],
  exports: [QueryComponent, TimerComponent, ContainerComponent]
})
export class FeatureWebApisModule {}
