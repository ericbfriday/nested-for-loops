import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'ui-kit-full-screen-spinner',
  template: `
    <div class="spinner-wrapper">
      <ui-kit-base-spinner></ui-kit-base-spinner>
    </div>
  `,
  styles: [
    `
      .spinner-wrapper {
        position: fixed;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        background-color: rgba(255, 255, 255, 0.5);
        z-index: 998;
        app-spinner {
          width: 6rem;
          height: 6rem;
        }
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullScreenSpinnerComponent implements OnInit {
  @Input() public message: string;
  constructor() {}

  ngOnInit() {}
}
