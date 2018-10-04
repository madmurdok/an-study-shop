import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<any>, ascOrder: boolean = false): any {
    // return array.sort((a, b) => {
    //   if()
    //   return 
    // });
    return null;
  }

}
