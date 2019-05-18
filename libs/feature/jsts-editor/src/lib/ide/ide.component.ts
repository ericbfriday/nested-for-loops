import {
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  ViewChild
} from '@angular/core';
// tslint:disable import-name no-require-imports no-var-requires
import * as ace from 'brace';
import { Observable } from 'rxjs';
require('brace/mode/javascript');
require('brace/mode/html');
require('brace/theme/monokai');

@Component({
  selector: 'jsts-editor-ide',
  templateUrl: './ide.component.html',
  styleUrls: ['./ide.component.scss']
})
export class IdeComponent implements AfterContentInit {
  public editor: ace.Editor;
  public mode: string;
  public editSession: ace.IEditSession;
  public initialValue: string = '';
  public codeChangeEmitter: EventEmitter<string[]> = new EventEmitter();
  @ViewChild('aceEditorWrapper', { read: ElementRef })
  public aceWrapper: HTMLElement;
  private rawCode$: Observable<string>;
  private wrappedHtml$: Observable<string>;
  constructor() {
    this.mode = 'javascript';
  }

  public ngAfterContentInit(): void {
    this.editor = ace.edit(this.aceWrapper);
    this.editSession = this.editor.getSession();

    this.editor.getSession().setMode(`ace/mode/${this.mode}`);
    this.editor.setTheme('ace/theme/monokai');

    this.editor.focus();
    this.editor.setValue(this.initialValue, -1);

    this.editor.on('blur', () => {
      this.codeChangeEmitter.emit(this.editor.getValue().split('\n'));
      // this.onBlur();
    });
  }
  // public onBlur = () => { };
}
