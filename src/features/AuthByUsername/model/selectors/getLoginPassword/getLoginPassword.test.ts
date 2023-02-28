import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  it('should return password value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '',
        password: '123',
        isLoading: false
      }
    };
    expect(getLoginPassword(state as StateSchema)).toBe('123');
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toBe('');
  });
});
