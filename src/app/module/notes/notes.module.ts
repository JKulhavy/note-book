import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material.moduel';
import { NotesPageComponent } from './component/notes-page/notes-page.component';
import { NotesRoutingModule } from './notes-routing.module';
import { NotesSearchComponent } from './component/notes-search/notes-search.component';
import { GetNotesService } from './service/get-notes.service';
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";
import { DeleteNotesService } from "./service/delete-notes.service";


@NgModule({
  imports: [MaterialModule, NotesRoutingModule, FormsModule, ReactiveFormsModule, CommonModule, MatTooltipModule, MatButtonModule],
  declarations: [NotesPageComponent, NotesSearchComponent],
  providers: [GetNotesService,DeleteNotesService]
})
export class NotesModule {
}
