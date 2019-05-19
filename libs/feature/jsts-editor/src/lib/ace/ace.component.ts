import {
  AfterContentInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
// tslint:disable import-name no-require-imports no-var-requires
import * as ace from 'brace';
require('brace/mode/javascript');
require('brace/mode/html');
require('brace/theme/monokai');

@Component({
  selector: 'jsts-editor-ace',
  template: `
    <div
      #aceEditorWrapper
      id="aceEditorWrapper"
      class="editor ace_editor ace-monokai ace_dark"
    ></div>
  `,
  styles: [
    `
      .editor {
        min-height: 100%;
        width: 100%;
        font-family: 'Fira Code VF', 'Fira Code', 'Hack', monospace;
        font-size: 16px;
        line-height: 1.75;
        display: inline-block;
        white-space: pre;
        padding-left: 45px;
        color: #333;
        overflow-y: hidden;
        position: relative;
      }

      .editor:before {
        content: attr(data-lines);
        /*content: "1\a 2\A 3\A 4\A 5\A 6\A 7\A 8\A 9\A 10\A 11\A 12\A 13\A 14\A 15\A 16\A 17\A";*/
        position: absolute;
        top: 0;
        left: 0;
        width: 41px;
        padding-left: 7.5px;
        text-align: center;
        background: #fbf1d3;
        height: 100%;
        white-space: pre;
      }
    `
  ]
})
export class AceComponent implements AfterContentInit {
  public editor: ace.Editor;
  public editSession: ace.IEditSession;
  @Input()
  public mode: string = 'javascript';
  @Input()
  public initialValue: string[];
  @ViewChild('aceEditorWrapper')
  private editorElement: string;
  // public codeChangeEmitter: EventEmitter<string[]> = new EventEmitter();

  constructor() {}

  public ngAfterContentInit(): void {
    this.editor = ace.edit('aceEditorWrapper'); // this.editorElement);
    this.editSession = this.editor.getSession();

    this.editor.getSession().setMode(`ace/mode/javascript`); // ${this.mode}`);
    this.editor.setTheme('ace/theme/monokai');

    this.editor.focus();
    const verifiedValue: string[] =
      this.initialValue === undefined || this.initialValue === null
        ? [
            '// JavaScript',
            'var a = 3;',
            '',
            '// below line has an error which is annotated',
            'var b ='
          ]
        : this.initialValue;
    this.editor.setValue(verifiedValue.join('\n'), -1);

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
