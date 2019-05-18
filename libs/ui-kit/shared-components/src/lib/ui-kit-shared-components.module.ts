import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseSpinnerComponent } from './base-spinner/base-spinner.component';
import { EventLoopSpinnerComponent } from './event-loop-spinner/event-loop-spinner.component';
import { FullScreenSpinnerComponent } from './full-screen-spinner/full-screen-spinner.component';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';

/**
 * https://christianlydemann.com/four-ways-to-create-loading-spinners-in-an-angular-app/
 */

@NgModule({
  imports: [CommonModule],
  declarations: [
    BaseSpinnerComponent,
    SpinnerOverlayComponent,
    FullScreenSpinnerComponent,
    EventLoopSpinnerComponent
  ],
  exports: [
    BaseSpinnerComponent,
    SpinnerOverlayComponent,
    FullScreenSpinnerComponent,
    EventLoopSpinnerComponent
  ]
})
export class UiKitSharedComponentsModule {}
