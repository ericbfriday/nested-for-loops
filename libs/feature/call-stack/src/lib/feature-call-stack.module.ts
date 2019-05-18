import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CallStackEffects } from './+state/call-stack.effects';
import { CallStackFacade } from './+state/call-stack.facade';
import {
  CALLSTACK_FEATURE_KEY,
  callStackReducer,
  initialState as callStackInitialState
} from './+state/call-stack.reducer';
import { ItemComponent } from './item/item.component';
import { TowerComponent } from './tower/tower.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(CALLSTACK_FEATURE_KEY, callStackReducer, {
      initialState: callStackInitialState
    }),
    EffectsModule.forFeature([CallStackEffects])
  ],
  providers: [CallStackFacade],
  declarations: [ItemComponent, TowerComponent],
  exports: [ItemComponent, TowerComponent]
})
export class FeatureCallStackModule {}
