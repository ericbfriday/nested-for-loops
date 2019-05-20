import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';
import { BraceEditorComponent } from './brace-editor/brace-editor.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BraceEditorComponent],
  exports: [BraceEditorComponent],
  entryComponents: [BraceEditorComponent]
})
export class CustomElementsCastModule {
  constructor(private injector: Injector) {}

  // tslint:disable-next-line: typedef
  ngDoBootstrap() {
    const el = createCustomElement(BraceEditorComponent, {
      injector: this.injector
    });
    customElements.define('cast-brace-editor', el);
  }
}
