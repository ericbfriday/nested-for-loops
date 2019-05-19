/**
 * Bootstraps application. Currentlyl written with setTimeout to allow intro animations to display
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// tslint:disable-next-line: no-import-side-effect
import 'hammerjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

setTimeout(
  async () =>
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch((err: Error) => console.error(err)),
  3000
);

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch(err => console.error(err));
