import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  USERCODE_FEATURE_KEY,
  initialState as userCodeInitialState,
  userCodeReducer
} from './+state/user-code.reducer';
import { UserCodeEffects } from './+state/user-code.effects';
import { UserCodeFacade } from './+state/user-code.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(USERCODE_FEATURE_KEY, userCodeReducer, {
      initialState: userCodeInitialState
    }),
    EffectsModule.forFeature([UserCodeEffects])
  ],
  providers: [UserCodeFacade]
})
export class FeatureUserCodeModule {}
