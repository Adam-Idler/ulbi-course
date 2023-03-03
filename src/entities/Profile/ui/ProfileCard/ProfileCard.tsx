import { getProfileData } from 'entities/Profile/model/selectors';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib';
import { Button, Input, Text } from 'shared/ui';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        <Button className={cls.editBtn}>
          {t('Редактировать')}
        </Button>
      </div>

      <div className={cls.data}>
        <Input
          value={data?.name}
          placeholder={t('Ваше имя')}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          className={cls.input}
        />
      </div>
    </div>
  );
};
