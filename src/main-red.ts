import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RedModule } from './app/red.module';
import { environment } from './environments/environment-red';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(RedModule)
  .catch(err => console.error(err));
