import {
  EventEmitter,
  ElementRef,
  OnInit,
  OnDestroy,
  NgZone
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import 'brace';
import 'brace/theme/monokai';
import 'brace/mode/javascript';
import 'brace/mode/html';
export declare class TsAceEditorComponent
  implements ControlValueAccessor, OnInit {
  private zone;
  textChanged: EventEmitter<{}>;
  textChange: EventEmitter<{}>;
  style: any;
  _options: any;
  _readOnly: boolean;
  _theme: string;
  _mode: any;
  _autoUpdateContent: boolean;
  _editor: any;
  _durationBeforeCallback: number;
  _text: string;
  oldText: any;
  timeoutSaving: any;
  constructor(elementRef: ElementRef, zone: NgZone);
  ngOnInit(): void;
  ngOnDestroy(): void;
  init(): void;
  initEvents(): void;
  updateText(): void;
  options: any;
  setOptions(options: any): void;
  readOnly: any;
  setReadOnly(readOnly: any): void;
  theme: any;
  setTheme(theme: any): void;
  mode: any;
  setMode(mode: any): void;
  value: string;
  writeValue(value: any): void;
  private _onChange;
  registerOnChange(fn: any): void;
  private _onTouched;
  registerOnTouched(fn: any): void;
  text: string;
  setText(text: any): void;
  autoUpdateContent: any;
  setAutoUpdateContent(status: any): void;
  durationBeforeCallback: number;
  setDurationBeforeCallback(num: number): void;
  getEditor(): any;
}
