import { NgModule } from '@angular/core';

import { NotesPageComponent } from './component/notes-page/notes-page.component';
import { NotesSearchComponent } from './component/notes-search/notes-search.component';
import { GetNotesService } from './service/get-notes.service';
import { DeleteNotesService } from './service/delete-notes.service';
import { SharedModule } from '../shared/shared.module';
import { NotesRoutingModule } from './notes-routing.module';
import { EditNoteComponent } from './component/edit-note/edit-note.component';
import { EditNoteService } from './service/edit-note.service';
import { NoteDetailComponent } from './component/note-detail/note-detail.component';
import { GetNoteService } from './service/get-note.service';
import { TrackByPropertyPipe } from './pipe/track-by-property.pipe';


@NgModule({
  imports: [SharedModule, NotesRoutingModule],
  declarations: [NotesPageComponent, NotesSearchComponent, EditNoteComponent, NoteDetailComponent, TrackByPropertyPipe],
  providers: [GetNotesService, DeleteNotesService, EditNoteService, GetNoteService]
})
export class NotesModule {
}
