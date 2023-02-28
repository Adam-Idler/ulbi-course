import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  it('should return username value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'Username',
        password: '',
        isLoading: false
      }
    };
    expect(getLoginUsername(state as StateSchema)).toBe('Username');
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toBe('');
  });
});
