import { storiesOf } from '@storybook/angular';
import { BraceEditorComponent } from './brace-editor.component';

storiesOf('Brace Editor (will change name)', module)
  .add('with javascript inputs', () => ({
    component: BraceEditorComponent,
    props: {
      mode: 'javascript',
      initialValue: [
        '// JavaScript',
        'var a = 3;',
        '',
        '// below line has an error which is annotated',
        'var b ='
      ]
    }
  }))
  .add('mode & initial value undefined', () => ({
    component: BraceEditorComponent,
    props: {
      mode: undefined,
      initialValue: undefined
    }
  }));
