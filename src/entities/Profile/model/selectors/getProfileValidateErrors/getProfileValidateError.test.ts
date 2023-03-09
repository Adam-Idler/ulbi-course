import { type StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
  it('should return profile validate error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileError.SERVER_ERROR,
          ValidateProfileError.INCORRECT_AGE
        ]
      }
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.INCORRECT_AGE
    ]);
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined);
  });
});
