import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ajudaIcon'
})
export class AjudaIconPipe implements PipeTransform {

  transform(value: string): string{
    switch(value){
      case '1':return 'looks_one';
      case '2': return 'looks_two';
      case '3':return 'looks_3';
      case '4': return 'looks_4';

    }
    return 'subdirectory_arrow_right';
  }

}
