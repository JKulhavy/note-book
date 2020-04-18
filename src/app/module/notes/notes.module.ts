import { NgModule } from '@angular/core';


import { MaterialModule } from '../../material.moduel';
import { NotesPageComponent } from './component/notes-page/notes-page.component';
import { NotesRoutingModule } from './notes-routing.module';

@NgModule({
  imports: [MaterialModule, NotesRoutingModule],
  declarations: [NotesPageComponent]
})
export class NotesModule {
}
