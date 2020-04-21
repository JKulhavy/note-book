import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { CreateNoteService } from '../../service/create-note.service';
import { CreateNodeModel } from '../../../shared/model/create-node.model';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
})
export class AddNoteComponent {
  constructor(
    private create: CreateNoteService,
    public dialogRef: MatDialogRef<AddNoteComponent>,
  ) {
  }

  saveNote(event: CreateNodeModel): void {
    this.create.create$(event).subscribe(() => this.dialogRef.close());
  }
}
