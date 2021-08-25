import { Input, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <header [style.background-color]="color">
      <span>{{ title }}</span>
    </header>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      header {
        display: flex;
        color: white;
      }
      header > span {
        line-height: 58px;
        padding: 0 16px;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  @Input()
  title: string = "";

  @Input()
  color: string = "black";

  constructor() {}

  ngOnInit(): void {}
}
