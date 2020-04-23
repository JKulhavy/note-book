import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable()
export class DeleteNotesService {
  constructor(private httpClient: HttpClient) {
  }

  delete$(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${environment.notesUrl}/notes/${id}`);
  }

}
