import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { GetNoteService } from '../../service/get-note.service';
import { NoteModel } from '../../model/note.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-note-detail',
  templateUrl: './note-detail,component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {
  note$: Observable<NoteModel>;
  private id?: string;

  constructor(
    private route: ActivatedRoute,
    private getNoteService: GetNoteService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.note$ = this.getNoteService.note$(this.id);
    }
  }

  goBack(): void {
    this.router.navigate(['/dashboard/notes']);
  }
}
