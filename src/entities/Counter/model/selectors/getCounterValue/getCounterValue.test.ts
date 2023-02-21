import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  const state: DeepPartial<StateSchema> = {
    counter: { value: 10 }
  };
  it('should return counter state value', () => {
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
