import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SettingsEffects } from './+state/settings.effects';
import { SettingsFacade } from './+state/settings.facade';
import {
  initialState as settingsInitialState,
  SETTINGS_FEATURE_KEY,
  settingsReducer
} from './+state/settings.reducer';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(SETTINGS_FEATURE_KEY, settingsReducer, {
      initialState: settingsInitialState
    }),
    EffectsModule.forFeature([SettingsEffects])
  ],
  providers: [SettingsFacade],
  declarations: [PanelComponent],
  exports: [PanelComponent]
})
export class FeatureSettingsModule {}
