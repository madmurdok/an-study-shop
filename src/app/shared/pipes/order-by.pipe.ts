import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByKey'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<any>, key: string, ascOrder: boolean = false): any {
    console.log(key);
    if ( !array ) {
      return null;
    }
    return array.sort((a, b) => {
      if (ascOrder) {
        return a.value[key] < b.value[key] ? 1 : 0;
      } else {
        return a.value[key] > b.value[key] ? 1 : 0;
      }
    });
  }

}
