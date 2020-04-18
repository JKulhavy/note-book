import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { notesSearchDefinition, notesSearchFields } from '../../definition/notes-search.definition';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-notes-search',
  templateUrl: './notes-search.component.html' ,
})
export class NotesSearchComponent implements OnInit, OnDestroy {
  @Output() searchChanged = new EventEmitter<string | undefined>();
  fields = notesSearchFields;
  form: FormGroup= this.formBuilder.group(notesSearchDefinition);
  private subscription: Subscription;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.subscription = this.form
      .get(this.fields.search)
      .valueChanges.subscribe(value => this.searchChanged.emit(value));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
