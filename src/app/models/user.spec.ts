import { User } from './user';

describe('User', () => {
  it('should create an instance and get age', () => {
    const user = new User('Mota', 'Fiorella', '2019-12-31', 'avatar');
    expect(user).toBeTruthy();
    expect(user.age()).toBe(3);
  });
});
