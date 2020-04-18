import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
})
export class NotesPageComponent {
  private search$ = new BehaviorSubject<string | undefined>(undefined);

  handleSearchChanged(event: string) {
    this.search$.next(event);
  }
}
