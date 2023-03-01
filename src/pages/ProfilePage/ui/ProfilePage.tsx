import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer
};

interface ProfilePageProps {
  className?: string
}

function ProfilePage ({ className = '' }: ProfilePageProps) {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames('', {}, [className])}>
        {t('PROFILE PAGE')}
      </div>
    </DynamicModuleLoader>
  );
}

export default ProfilePage;
