import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ajudaIcon'
})
export class AjudaIconPipe implements PipeTransform {

  transform(value: string): string{
    switch(value){
      case '0':return 'login';
      case '1': return 'person_add';
    }
    return 'support_agent';
  }

}
