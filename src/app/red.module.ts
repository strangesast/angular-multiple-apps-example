import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { RedComponent } from "./red.component";
import { SharedModule } from "./shared/shared.module";

const routes: Routes = [];

@NgModule({
  declarations: [RedComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), SharedModule],
  providers: [],
  bootstrap: [RedComponent],
})
export class RedModule {}
