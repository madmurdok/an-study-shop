import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<any>, ascOrder: boolean = false): any {
    if ( !array ) {
      return null;
    }
    return array.sort((a, b) => {
      if (ascOrder) {
        return a < b ? 1 : 0;
      } else {
        return a > b ? 1 : 0;
      }
    });
  }

}
