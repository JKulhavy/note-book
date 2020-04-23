import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotesPageComponent } from './component/notes-page/notes-page.component';
import { NoteDetailComponent } from "./component/note-detail/note-detail.component";


const routes: Routes = [
  {
    path: '',
    component: NotesPageComponent,
  },
  {
    path: ':id',
    component: NoteDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {
}
