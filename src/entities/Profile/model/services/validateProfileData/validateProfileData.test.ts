import { validateProfileData } from './validateProfileData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Russia,
  lastname: 'adminovich',
  name: 'root',
  city: 'Moscow',
  currency: Currency.USD
};

describe('validateProfileData', () => {
  test('success validation', () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without first and last name', () => {
    const result = validateProfileData({ ...data, name: '', lastname: '' });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA
    ]);
  });

  test('incorrect age', () => {
    const result = validateProfileData({ ...data, age: 0 });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE
    ]);
  });

  test('incorrect country', () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY
    ]);
  });

  test('incorrect all', () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY
    ]);
  });
});
