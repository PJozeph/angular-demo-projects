import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string, filteredString: string, propName: string ): any {
    if(value.length == 0 || filteredString === '') {
      return value
    }
    const result = [];
    for(const item of value) {
      if(item[propName] === filteredString ) {
        result.push(item);
      }
    }
    return result;
  }

}
