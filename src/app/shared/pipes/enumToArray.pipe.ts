import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray',
})
export class EnumToArrayPipe implements PipeTransform {
  transform(enumeration: object): any {
    const keys = Object.keys(enumeration);
    return keys;
  }
}
