import { type StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  it('should return profile first name', () => {
    const data = {
      username: 'admin',
      age: 22,
      country: Country.Russia,
      lastname: 'adminovich',
      name: 'root',
      city: 'Moscow',
      currency: Currency.USD
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data
      }
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toBe(undefined);
  });
});
