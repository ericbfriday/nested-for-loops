import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IdeComponent } from './ide/ide.component';

@NgModule({
  imports: [CommonModule],
  declarations: [IdeComponent],
  exports: [IdeComponent]
})
export class FeatureHtmlEditorModule {}
