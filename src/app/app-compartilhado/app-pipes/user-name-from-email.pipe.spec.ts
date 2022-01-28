import { UserNameFromEmailPipe } from './user-name-from-email.pipe';

describe('UserNameFromEmailPipe', () => {
  it('create an instance', () => {
    const pipe = new UserNameFromEmailPipe();
    expect(pipe).toBeTruthy();
  });
});
