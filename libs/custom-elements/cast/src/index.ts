import { NgElement, WithProperties } from '@angular/elements';
import { BraceEditorComponent } from './lib/brace-editor/brace-editor.component';

/**
 * Declaring the element globally allows us to get correcting typing through the IDEs.
 * `WithProperties<{..}>` should list all public properties.
 */
declare global {
  interface HTMLElementTagNameMap {
    'cast-brace-editor': NgElement & WithProperties<BraceEditorComponent>; // { content: string }>;
    // 'my-other-element': NgElement & WithProperties<{foo: 'bar'}>;
  }
}

export * from './lib/custom-elements-cast.module';
