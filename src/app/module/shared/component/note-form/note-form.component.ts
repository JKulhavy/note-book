import { Component, ChangeDetectionStrategy, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { noteFormDefinition, noteFormFields } from '../definition/note-form.definition';
import { CreateNodeModel } from '../../model/create-node.model';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['note-form.component.scss'],
})
export class NoteFormComponent implements OnInit {
  @Input() title: string;
  @Output() submittedNote = new EventEmitter<CreateNodeModel>();
  fields = noteFormFields;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(noteFormDefinition(this.title));
  }

  onSubmit() {
    this.submittedNote.emit(this.form.value);
  }
}
