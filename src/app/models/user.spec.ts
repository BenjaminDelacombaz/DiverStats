import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('1234', 'testdev@test.ts', 'P@$$W0rd')).toBeTruthy();
  });
});
