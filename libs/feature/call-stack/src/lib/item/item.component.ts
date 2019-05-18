import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'callstack-item',
  template: `
    <p>
      item works!
    </p>
  `,
  styles: []
})
export class ItemComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {}
}
