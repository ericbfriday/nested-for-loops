import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
// tslint:disable import-name no-require-imports no-var-requires
import * as ace from 'brace';
require('brace/mode/javascript');
require('brace/mode/html');
require('brace/theme/monokai');

@Component({
  selector: 'jsts-editor-ace',
  template: `
    <div #aceEditorWrapper></div>
  `,
  styles: []
})
export class AceComponent implements OnInit {
  public editor: ace.Editor;
  public editSession: ace.IEditSession;
  @Input()
  public mode: string;
  @Input()
  public initialValue: number;
  @ViewChild('aceEditorWrapper')
  private editorElement: string;

  constructor() {
    this.mode = 'javascript';
  }

  public ngOnInit(): void {
    this.editor = ace.edit(this.editorElement);
    this.editSession = this.editor.getSession();

    this.editor.getSession().setMode(`ace/mode/${this.mode}`);
    this.editor.setTheme('ace/theme/monokai');

    this.editor.focus();
    this.editor.setValue((this.initialValue - 1).toString());

    this.editor.on('blur', () => {
      this.onCodeChange(this.editor.getValue().split('\n'));
      // this.onBlur();
    });
  }
  // public onBlur = (): void => {};
  public onCodeChange = (newCode: string[]): void => {
    // tslint:disable-next-line: no-suspicious-comment
    // TODO Dispatch an action here.
    // tslint:disable-next-line: no-console
    console.log('Code changed to', newCode);
  };
}
