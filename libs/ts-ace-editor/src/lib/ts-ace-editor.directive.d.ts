import {
  EventEmitter,
  ElementRef,
  OnInit,
  OnDestroy,
  NgZone
} from '@angular/core';
import 'brace';
import 'brace/theme/monokai';
import 'brace/mode/html';
import 'brace/mode/javascript';
export declare class TsAceEditorDirective implements OnInit {
  private zone;
  textChanged: EventEmitter<{}>;
  textChange: EventEmitter<{}>;
  _options: any;
  _readOnly: boolean;
  _theme: string;
  _mode: any;
  _autoUpdateContent: boolean;
  _durationBeforeCallback: number;
  _text: string;
  editor: any;
  oldText: any;
  timeoutSaving: any;
  constructor(elementRef: ElementRef, zone: NgZone);
  ngOnInit(): void;
  ngOnDestroy(): void;
  init(): void;
  initEvents(): void;
  updateText(): void;
  options: any;
  readOnly: any;
  theme: any;
  mode: any;
  setMode(mode: any): void;
  text: string;
  setText(text: any): void;
  autoUpdateContent: any;
  durationBeforeCallback: number;
  setDurationBeforeCallback(num: number): void;
  readonly aceEditor: any;
}
