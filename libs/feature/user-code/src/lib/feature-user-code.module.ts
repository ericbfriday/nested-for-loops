import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserCodeEffects } from './+state/user-code.effects';
import { UserCodeFacade } from './+state/user-code.facade';
import {
  initialState as userCodeInitialState,
  USERCODE_FEATURE_KEY,
  userCodeReducer
} from './+state/user-code.reducer';

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
