export interface TrackByFunctionCashModel {
  // tslint:disable-next-line:no-any
  [propertyName: string]: <T>(index: number, item: T) => any;
}
