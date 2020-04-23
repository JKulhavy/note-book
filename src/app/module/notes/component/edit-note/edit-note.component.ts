import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { CreateNodeModel } from '../../../shared/model/create-node.model';
import { EditNoteService } from "../../service/edit-note.service";
import { NoteModel } from "../../model/note.model";


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
})
export class EditNoteComponent {
  constructor(
    private editNoteService: EditNoteService,
    public dialogRef: MatDialogRef<EditNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NoteModel,

  ) {
  }

  saveNote(event: CreateNodeModel): void {
    this.editNoteService.edit$(event, this.data.id).subscribe(() => this.dialogRef.close());
  }
}
