import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { BlueComponent } from "./blue.component";
import { SharedModule } from "./shared/shared.module";

const routes: Routes = [];

@NgModule({
  declarations: [BlueComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), SharedModule],
  providers: [],
  bootstrap: [BlueComponent],
})
export class BlueModule {}
