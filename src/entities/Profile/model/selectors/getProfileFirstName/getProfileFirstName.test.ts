import { type StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileFirstName } from './getProfileFirstName';

describe('getProfileFirstName', () => {
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
        data
      }
    };
    expect(getProfileFirstName(state as StateSchema)).toBe('root');
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileFirstName(state as StateSchema)).toBe('');
  });
});
