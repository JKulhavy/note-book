import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { NoteModel } from '../../notes/model/note.model';
import { CreateNodeModel } from '../../shared/model/create-node.model';


@Injectable()
export class CreateNoteService {
  constructor(private httpClient: HttpClient) {
  }

  create$(body: CreateNodeModel): Observable<NoteModel> {
    return this.httpClient.post<NoteModel>(`${environment.notesUrl}/notes`, body);
  }
}
