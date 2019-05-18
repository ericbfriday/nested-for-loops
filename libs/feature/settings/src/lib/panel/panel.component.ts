import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'settings-panel',
  template: `
    <p>
      panel works!
    </p>
  `,
  styles: []
})
export class PanelComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {}
}
