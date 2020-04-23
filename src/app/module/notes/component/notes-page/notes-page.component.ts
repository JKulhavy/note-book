import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

import { GetNotesService } from '../../service/get-notes.service';
import { NoteModel } from '../../model/note.model';
import { SearchInNotesUtil } from '../../util/search-in-notes.util';
import { DeleteNotesService } from '../../service/delete-notes.service';
import { MatDialog } from "@angular/material/dialog";
import { EditNoteComponent } from "../edit-note/edit-note.component";


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
})
export class NotesPageComponent {
  searchedNotes$: Observable<NoteModel[] | undefined>;
  private notes$: Observable<NoteModel[] | undefined> = this.getNotesService.notes$();
  private search$ = new BehaviorSubject<string | undefined>(undefined);

  constructor(
    private getNotesService: GetNotesService,
    private deleteNotesService: DeleteNotesService,
    public dialog: MatDialog,
  ) {
    this.searchedNotes$ = this.getSearchNotes$();
  }

  handleSearchChanged(event: string): void {
    this.search$.next(event);
  }

  deleteItem(id: string) {
    this.deleteNotesService.delete$(id).subscribe();
  }

  editItem(note:NoteModel) {
    this.dialog.open(EditNoteComponent, {
      data: note
    })
  }

  private getSearchNotes$(): Observable<NoteModel[] | undefined> {
    return combineLatest([this.notes$, this.search$])
      .pipe(
        debounceTime(0),
        map(([notes, search]) => SearchInNotesUtil.search(search, notes))
      );
  }
}

