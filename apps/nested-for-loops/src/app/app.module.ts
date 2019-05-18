import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { UiKitSharedComponentsModule } from '@friday-friday/ui-kit/shared-components';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../environments/environment';
import { NestedForLoopsRootEffects } from './+root-state/nested-for-loops-root.effects';
import { NestedForLoopsRootFacade } from './+root-state/nested-for-loops-root.facade';
import {
  initialState as nestedForLoopsRootInitialState,
  NESTEDFORLOOPSROOT_FEATURE_KEY,
  nestedForLoopsRootReducer
} from './+root-state/nested-for-loops-root.reducer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiKitSharedComponentsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    NxModule.forRoot(),
    StoreModule.forRoot(
      { nestedForLoopsRoot: nestedForLoopsRootReducer },
      {
        initialState: { nestedForLoopsRoot: nestedForLoopsRootInitialState },
        metaReducers: !environment.production ? [storeFreeze] : []
      }
    ),
    EffectsModule.forRoot([NestedForLoopsRootEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // Material Imports
    MatToolbarModule
  ],
  providers: [NestedForLoopsRootFacade],
  bootstrap: [AppComponent]
})
export class AppModule {}

/**
 *     StoreModule.provideStore(rootReducer),
    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
 */
