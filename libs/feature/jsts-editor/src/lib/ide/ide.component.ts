import {
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  ViewChild,
  AfterViewInit,
  OnInit,
  Input
} from '@angular/core';
// tslint:disable import-name no-require-imports no-var-requires
import { Observable } from 'rxjs';

import * as acemodule from 'ace-builds/src-noconflict/ace';
acemodule.require('ace/mode/javascript');
acemodule.require('ace/mode/html');
acemodule.require('ace/theme/monokai');

@Component({
  selector: 'jsts-editor-ide',
  templateUrl: './ide.component.html',
  styleUrls: ['./ide.component.scss']
})
export class IdeComponent implements OnInit, AfterViewInit {
  public editor: acemodule.Editor;
  public mode: string = 'javascript';
  public editSession: acemodule.IEditSession;
  @Input()
  public initialValue: string[];
  public codeChangeEmitter: EventEmitter<string[]> = new EventEmitter();
  // @ViewChild('aceEditorWrapper', { read: ElementRef })
  // public aceWrapper: HTMLElement;
  @Input()
  private rawCode: string[];
  @Input()
  private wrappedHtml: string[];
  constructor() {}

  public ngOnInit(): void {
    // this.store.pipe(select())
  }

  public ngAfterViewInit(): void {
    // this.editor = acemodule.edit(this.aceWrapper);
    // this.editSession = this.editor.getSession();
    // this.editor.getSession().setMode(`ace/mode/${this.mode}`);
    // this.editor.setTheme('ace/theme/monokai');
    // this.editor.focus();
    // this.editor.setValue(this.initialValue.join('\n'), -1);
    // this.editor.on('blur', () => {
    //   this.codeChangeEmitter.emit(this.editor.getValue().split('\n'));
    //   // this.onBlur();
    // });
  }
  // public onBlur = () => { };
}
