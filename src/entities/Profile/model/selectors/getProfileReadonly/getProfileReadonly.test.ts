import { type StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
  it('should return profile readonly state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true
      }
    };
    expect(getProfileReadonly(state as StateSchema)).toBe(true);
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).toBe(undefined);
  });
});
