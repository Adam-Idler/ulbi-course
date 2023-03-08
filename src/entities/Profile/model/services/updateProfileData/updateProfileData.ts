import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../selectors';
import { type Profile } from '../../types/profile';

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    const formData = getProfileForm(getState());

    try {
      const response = await extra.api.put<Profile>('/profile', formData);
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  }
);
