import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { GetNotesService } from '../../service/get-notes.service';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
})
export class NotesPageComponent {
  notes$ = this.getNotesService.notes$();
  private search$ = new BehaviorSubject<string | undefined>(undefined);

  constructor(private getNotesService: GetNotesService) {
  }

  handleSearchChanged(event: string) {
    this.search$.next(event);
  }
}
