import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material.moduel';
import { NoteFormComponent } from './component/note-form/note-form.component';

@NgModule({
  imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
  declarations: [NoteFormComponent],
  exports: [NoteFormComponent, MaterialModule, FormsModule, ReactiveFormsModule, CommonModule]

})
export class SharedModule {
}
