import { type StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  it('should return profile data', () => {
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
        data
      }
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toBe(undefined);
  });
});
