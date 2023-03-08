import { type Country } from 'entities/Country';
import { type Currency } from 'entities/Currency';
import { fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, profileActions, ProfileCard, profileReducer } from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
  profile: profileReducer
};

interface ProfilePageProps {
  className?: string
}

function ProfilePage ({ className }: ProfilePageProps) {
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  useEffect(() => {
    void dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ name: value ?? '' }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value ?? '' }));
  }, [dispatch]);

  // TODO: Сделать валидацию чтобы можно вводить только цифры
  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value ?? 0) }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value ?? '' }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value ?? '' }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value ?? '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeCity={onChangeCity}
          onChangeAge={onChangeAge}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
}

export default ProfilePage;
