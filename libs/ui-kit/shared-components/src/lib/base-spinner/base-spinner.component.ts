import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'ui-kit-base-spinner',
  template: `
    <div class="container">
      <div class="row">
        <div id="loader">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="loading"></div>
        </div>

        <p class="spinner-message" *ngIf="message && message !== ''">
          {{ message }}
        </p>
      </div>
    </div>
  `,
  styles: [], // '@import "styles/spinner";'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseSpinnerComponent implements OnInit {
  @Input() public message = '';

  constructor() {}

  public ngOnInit(): void {}
}

/**
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() message = '';

  constructor() { }

  ngOnInit() {
  }
}
 */
