import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { NoteModel } from "../model/note.model";
import { environment } from "../../../../environments/environment";

@Injectable()
export class GetNoteService {
  constructor(private httpClient: HttpClient) {
  }

  note$(id: string): Observable<NoteModel> {
    return this.httpClient.get<NoteModel>(`${environment.notesUrl}/notes/${id}`);
  }

}
