import { NgModule } from '@angular/core';

import { NotesPageComponent } from './component/notes-page/notes-page.component';
import { NotesSearchComponent } from './component/notes-search/notes-search.component';
import { GetNotesService } from './service/get-notes.service';
import { DeleteNotesService } from './service/delete-notes.service';
import { SharedModule } from '../shared/shared.module';
import { NotesRoutingModule } from './notes-routing.module';


@NgModule({
  imports: [SharedModule, NotesRoutingModule],
  declarations: [NotesPageComponent, NotesSearchComponent],
  providers: [GetNotesService, DeleteNotesService]
})
export class NotesModule {
}
