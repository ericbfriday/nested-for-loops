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
export class IdeComponent implements OnInit, AfterViewInit {
  public editor: ace.Editor;
  public mode: string = 'javascript';
  public editSession: ace.IEditSession;
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
    // this.editor = ace.edit(this.aceWrapper);
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
