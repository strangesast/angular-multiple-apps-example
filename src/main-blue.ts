import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { BlueModule } from "./app/blue.module";
import { environment } from "./environments/environment-blue";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(BlueModule)
  .catch((err) => console.error(err));
