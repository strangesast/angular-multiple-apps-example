import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "../header/header.component";
import { ListComponent } from "../list/list.component";

const components = [HeaderComponent, ListComponent];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
})
export class SharedModule {}
