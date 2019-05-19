import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'friday-friday-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  public initialValue: string[] = [
    `console.log(\'test\'test)`,
    `function aPlaceHolderFunction() {`,
    `void()`,
    `}`
  ];
  public rawCode$: Observable<string>;
  public wrappedHtml$: Observable<string>;
  constructor() {
    this.initialValue = [
      `console.log(\'test\'test)`,
      `function aPlaceHolderFunction() {`,
      `void()`,
      `}`
    ];
    this.rawCode$ = from(['']);
    this.wrappedHtml$ = from(['']);
  }

  ngOnInit() {}
}
