import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeDemo'
})
export class PipeInit implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.toUpperCase();
  }

}
