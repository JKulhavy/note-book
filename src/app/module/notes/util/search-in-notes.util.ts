import { NoteModel } from '../model/note.model';

export class SearchInNotesUtil {
  static search(searchValue?: string, notes?: NoteModel[]): NoteModel[] | undefined {
    if (searchValue && notes && notes.length > 0) {
      return notes.filter(value => value && value.title && value.title.toLowerCase().includes(searchValue.toLowerCase()));
    }
    return notes;
  }
}
