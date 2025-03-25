import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  pure: true
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/(?:^|[.!?]\s*)([a-z])/g, (match) => match.toUpperCase());
  }

}
