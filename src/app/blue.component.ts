import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-header [title]="title" color="blue"></app-header>
    <app-list [items]="items"></app-list>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class BlueComponent {
  title = "Blue";

  items = ["Blue 1", "Blue 2"];
}
