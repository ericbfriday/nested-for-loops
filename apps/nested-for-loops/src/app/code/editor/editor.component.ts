import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, from } from 'rxjs';
// import 'brace/theme/github';
// import 'brace/mode/sql';
// import ace from 'ace-builds/src-noconflict/ace';
// declare let ace: ace;
import * as ace from '@friday-friday/ace-builds-src';
import { webpack-resolver } from '@friday-friday/ace-builds-src';
declare let ace: ace;


@Component({
  selector: 'friday-friday-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements AfterViewInit {
  public initialValue: string = `console.log(\'test\'test)\nfunction aPlaceHolderFunction() {\nvoid()\n}`;
  public rawCode$: Observable<string>;
  public wrappedHtml$: Observable<string>;
  @ViewChild('mainEditor') public mainEditor;
  constructor() {
    this.rawCode$ = from(['']);
    this.wrappedHtml$ = from(['']);
  }

  ngAfterViewInit() {
    const Range = ace.require('ace/range')['Range'];

    // this.mainEditor
    //   .getEditor()
    //   .session.addMarker(new Range(0, 0, 2, 1), 'myMarker', 'fullLine');

    this.mainEditor.getEditor().session.setOption('useWorker', true);
  }

  onRuleChange(event: Event) {
    console.log(event);
  }
}
