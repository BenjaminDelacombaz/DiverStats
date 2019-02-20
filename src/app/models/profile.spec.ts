import { Profile } from './profile';

describe('Profile', () => {
  it('should create an instance', () => {
    expect(new Profile('Sullyvan', 'Butoxx', 'Sully')).toBeTruthy();
  });
});
