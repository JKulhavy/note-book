import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { NoteModel } from '../../notes/model/note.model';
import { CreateNodeModel } from '../../shared/model/create-node.model';


@Injectable()
export class EditNoteService {
  constructor(private httpClient: HttpClient) {
  }

  edit$(body: CreateNodeModel, id:string): Observable<NoteModel> {
    return this.httpClient.put<NoteModel>(`${environment.notesUrl}/notes/${id}`, body);
  }
}
