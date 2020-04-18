import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material.moduel';
import { NotesPageComponent } from './component/notes-page/notes-page.component';
import { NotesRoutingModule } from './notes-routing.module';
import { NotesSearchComponent } from './component/notes-search/notes-search.component';


@NgModule({
  imports: [MaterialModule, NotesRoutingModule, FormsModule, ReactiveFormsModule,  CommonModule],
  declarations: [NotesPageComponent, NotesSearchComponent]
})
export class NotesModule {
}
