import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Pipe({
  name: 'apiImg'
})
export class ApiImgPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `${environment.apiBase}/media/${value}`;
  }

}
