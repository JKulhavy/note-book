import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NoteModel } from '../model/note.model';
import { environment } from '../../../../environments/environment';

@Injectable()
export class GetNotesService {
  constructor(private httpClient: HttpClient) {
  }

  notes$(): Observable<NoteModel[]> {
    return this.httpClient.get<NoteModel[]>(environment.notesListUrl);
  }

}
