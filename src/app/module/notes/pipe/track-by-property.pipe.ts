import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

import { TrackByFunctionCashModel } from '../model/track-by-function-cash.model';

const cache: TrackByFunctionCashModel = { };

@Pipe({
  name: 'trackByProperty',
})
export class TrackByPropertyPipe implements PipeTransform {
  // tslint:disable-next-line:no-any
  transform(propertyName: string): <T>(index: number, item: T) => any {
    if (!cache[propertyName]) {
      // tslint:disable-next-line:no-any
      cache[propertyName] = <T>(index: number, item: T): any => {
        return item ? item[propertyName] : index;
      };
    }
    return cache[propertyName];
  }
}
