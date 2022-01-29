import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userNameFromEmail',
})
export class UserNameFromEmailPipe implements PipeTransform {
  transform(email: string): string {
    if (email.includes('@')) {
      return email.split('@')[0];
    }
    return email;
  }
}
