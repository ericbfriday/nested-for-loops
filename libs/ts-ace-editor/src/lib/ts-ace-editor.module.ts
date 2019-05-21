import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TsAceEditorComponent } from './ts-ace-editor.component';
import { TsAceEditorDirective } from './ts-ace-editor.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [TsAceEditorComponent, TsAceEditorDirective],
  exports: [TsAceEditorComponent, TsAceEditorDirective]
})
export class TsAceEditorModule {}
