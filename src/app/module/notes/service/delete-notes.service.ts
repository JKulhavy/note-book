import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NoteModel } from '../model/note.model';
import { environment } from '../../../../environments/environment';

@Injectable()
export class DeleteNotesService {
  constructor(private httpClient: HttpClient) {
  }

  delete$(id: string): Observable<NoteModel[]> {
    return this.httpClient.delete<NoteModel[]>(`${environment.notesUrl}/notes/${id}`);
  }

}
