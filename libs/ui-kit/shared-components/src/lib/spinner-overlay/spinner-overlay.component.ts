import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-kit-spinner-overlay',
  template: `
    <div class="wrapper">
      <div class="overlay">
        <div class="spinner-wrapper">
          <ui-kit-base-spinner></ui-kit-base-spinner>
        </div>
      </div>

      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .wrapper {
        width: 100%;
        height: 100%;
      }

      .overlay {
        position: absolute;
        z-index: 1002;
        background-color: rgba(255, 255, 255, 0.5);
        width: 100%;
        height: 100%;
      }

      .spinner-wrapper {
        display: flex;
        justify-content: center;
        justify-items: center;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerOverlayComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {}
}
