/**
 * Exports the JS and TS Editor features. Able to provide a large canvas for IDE activities.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AceComponent } from './ace/ace.component';
import { IdeComponent } from './ide/ide.component';

@NgModule({
  imports: [CommonModule],
  declarations: [IdeComponent, AceComponent],
  exports: [IdeComponent, AceComponent]
})
// tslint:disable-next-line: no-unnecessary-class
export class FeatureJstsEditorModule {}
