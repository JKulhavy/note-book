import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotesPageComponent } from './component/notes-page/notes-page.component';


const routes: Routes = [
  {
    path: '',
    component: NotesPageComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {
}
