import { NgModule } from '@angular/core';

import { NotesPageComponent } from './component/notes-page/notes-page.component';
import { NotesSearchComponent } from './component/notes-search/notes-search.component';
import { GetNotesService } from './service/get-notes.service';
import { DeleteNotesService } from './service/delete-notes.service';
import { SharedModule } from '../shared/shared.module';
import { NotesRoutingModule } from './notes-routing.module';
import { EditNoteComponent } from "./component/edit-note/edit-note.component";
import { EditNoteService } from "./service/edit-note.service";


@NgModule({
  imports: [SharedModule, NotesRoutingModule],
  declarations: [NotesPageComponent, NotesSearchComponent, EditNoteComponent],
  providers: [GetNotesService, DeleteNotesService, EditNoteService]
})
export class NotesModule {
}
