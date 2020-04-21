import { Validators } from '@angular/forms';

export const noteFormFields = {
  title: 'title',
};

export const noteFormDefinition = (title?: string) => {
  return { [noteFormFields.title]: [title ? title : '', [Validators.required, Validators.minLength(3)]] };
};
