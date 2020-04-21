import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AddNoteComponent } from './component/add-note/add-note.component';
import { CreateNoteService } from './service/create-note.service';

@NgModule({
  imports: [SharedModule, DashboardRoutingModule],
  declarations: [DashboardComponent, AddNoteComponent],
  providers: [CreateNoteService],
  entryComponents: [AddNoteComponent],
})
export class DashboardModule {
}
