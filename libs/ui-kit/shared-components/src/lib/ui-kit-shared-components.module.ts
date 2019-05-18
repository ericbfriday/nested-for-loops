import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSpinnerComponent } from './base-spinner/base-spinner.component';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';
import { FullScreenSpinnerComponent } from './full-screen-spinner/full-screen-spinner.component';

/**
 * https://christianlydemann.com/four-ways-to-create-loading-spinners-in-an-angular-app/
 */

@NgModule({
  imports: [CommonModule],
  declarations: [
    BaseSpinnerComponent,
    SpinnerOverlayComponent,
    FullScreenSpinnerComponent
  ],
  exports: [
    BaseSpinnerComponent,
    SpinnerOverlayComponent,
    FullScreenSpinnerComponent
  ]
})
export class UiKitSharedComponentsModule {}
