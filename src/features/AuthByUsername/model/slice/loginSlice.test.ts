import { type DeepPartial } from '@reduxjs/toolkit';
import { type LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('set username', () => {
    const state: DeepPartial<LoginSchema> = { username: '' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('Username'))
    ).toEqual({ username: 'Username' });
  });

  test('set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('Password'))
    ).toEqual({ password: 'Password' });
  });
});
