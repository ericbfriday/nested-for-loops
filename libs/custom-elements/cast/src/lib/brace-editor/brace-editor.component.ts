// tslint: disable no-import-side-effect import-name no-require-imports no-var-requires
/// <reference path="../ace/ace-modules.d.ts" />
/* Custom element to work around problems of browserify with entire workspace */
import {
  AfterContentInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  EventEmitter,
  ViewEncapsulation,
  AfterViewInit,
  Output,
  OnDestroy
} from '@angular/core';

/**
 * ace-builds has a custom ace importer, however it doesn't play nicely with all module targets.
 * See here for details and other implementations:
 * https://github.com/ajaxorg/ace-builds/issues/129#issuecomment-382893705
 */

// import ace
import 'ace-builds/webpack-resolver';
/// <reference path="../ace/ace.d.ts" />
import { Ace as ace } from 'ace-builds/src-min-noconflict/ace';


@Component({
  selector: 'cast-brace-editor',
  templateUrl: './brace-editor.component.html',
  styleUrls: ['./brace-editor.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class BraceEditorComponent implements AfterViewInit, OnDestroy {
  public editor: ace.Editor;
  public editSession: ace.IEditSession;
  @Input()
  public mode: string = 'javascript';
  @Input()
  public initialValue: string[];
  @ViewChild('aceEditor')
  public editorElement: ElementRef;
  @Output()
  public codeChangeEmitter: EventEmitter<string[]> = new EventEmitter();

  constructor() {}

  public ngAfterViewInit(): void {
    const editor: Ace.Editor = ace.edit(this.editorElement.nativeElement{
        cursorStyle: 'wide',
        selectionStyle: 'text',
        highlightActiveLine: true,
        highlightSelectedWord: true,
        wrapBehavioursEnabled: false,
        copyWithEmptySelection: true,
        maxLines: 50,
        minLines: 10,
        showGutter: false,
        value: `var hello = 'world';\nconsole.log(\'hello\');\nconsole.log(hello)`,
        mode: `ace/mode/javascript` // ${this.mode}`);
        // enableBasicAutocompletion: true
      }); // 'aceEditorWrapper'); // this.editorElement); // );
    editor.getSession().setMode('ace/mode/javascript');
    editor.setTheme('ace/theme/monokai');
    // editor.setKeyboardHandler('ace/keyboard/vim');
    editor.setValue(
      [
        '// JavaScript',
        'var a = 3;',
        '',
        '// below line has an error which is annotated',
        'var b ='
      ].join('\n')
    );
    editor.clearSelection();
    // this.editor = ace.edit(this.editorElement.nativeElement, {
    //   cursorStyle: 'wide',
    //   selectionStyle: 'text',
    //   highlightActiveLine: true,
    //   highlightSelectedWord: true,
    //   wrapBehavioursEnabled: false,
    //   copyWithEmptySelection: true,
    //   maxLines: 50,
    //   minLines: 10,
    //   showGutter: false,
    //   value: `var hello = 'world';\nconsole.log(hello);`,
    //   mode: `ace/mode/javascript` // ${this.mode}`);
    //   // enableBasicAutocompletion: true
    // }); // 'aceEditorWrapper'); // this.editorElement);
    // this.editSession = this.editor.getSession();
    // this.editor.setTheme('ace/theme/monokai');
    // const verifiedValue: string[] =
    //   this.initialValue === undefined ||
    //   this.initialValue === null ||
    //   !Array.isArray(this.initialValue)
    //     ? [
    //         '// JavaScript',
    //         'var a = 3;',
    //         '',
    //         '// below line has an error which is annotated',
    //         'var b ='
    //       ]
    //     : this.initialValue;
    // this.editor.setValue(verifiedValue.join('\n'), -1);
    // this.editor.on('blur', () => {
    //   const currentValuesAsArray: string[] = this.editor.getValue().split('\n');
    //   this.onCodeChange(currentValuesAsArray);
    //   // this.onBlur();
    // });
  }
  // public onBlur = (): void => {};
  public onCodeChange = (newCode: string[]): void => {
    // tslint:disable-next-line: no-suspicious-comment
    // TODO Dispatch an action here.
    // tslint:disable-next-line: no-console
    console.log('Code changed to', newCode);
    this.codeChangeEmitter.emit(newCode);
  };

  public ngOnDestroy() {
    if (this.editor) {
      this.editor.destroy();
      this.editor.container.remove();
    }
  }
}
