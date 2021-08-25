import { Input, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list",
  template: ` <div *ngFor="let item of items">{{ item }}</div> `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
      }
      div {
        line-height: 40px;
        padding: 0 16px;
      }
    `,
  ],
})
export class ListComponent implements OnInit {
  @Input() items: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
