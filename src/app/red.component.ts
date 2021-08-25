import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-header [title]="title" color="red"></app-header>
    <app-list [items]="items"></app-list>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class RedComponent {
  title = "Red";

  items = ["Red 1", "Red 2", "Red 3"];
}
