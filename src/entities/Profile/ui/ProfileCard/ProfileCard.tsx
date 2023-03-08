import { type Profile } from '../../model/types/profile';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Avatar, Input, Loader, Text, TextAlign, TextTheme } from 'shared/ui';
import cls from './ProfileCard.module.scss';
import { type Mods } from 'shared/lib/classNames/classNames';
import { type Currency, CurrencySelect } from 'entities/Currency';
import { type Country } from 'entities/Country';
import { CountrySelect } from 'entities/Country/ui/CountrySelect/CountrySelect';

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry: (country: Country) => void
}

export const ProfileCard = ({
  className,
  data,
  isLoading,
  error,
  readonly = false,
  onChangeFirstname,
  onChangeLastname,
  onChangeCity,
  onChangeAge,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const mods: Mods = {
    [cls.editing]: !readonly
  };

  if (isLoading === true) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.profileCard, mods, [className])}>
      <div className={cls.data}>
        {!!data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        )}

        <Input
          className={cls.input}
          value={data?.name}
          placeholder={t('Имя')}
          onChange={onChangeFirstname}
          readOnly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.lastname}
          placeholder={t('Фамилия')}
          onChange={onChangeLastname}
          readOnly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.age}
          placeholder={t('Возраст')}
          onChange={onChangeAge}
          readOnly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.city}
          placeholder={t('Город')}
          onChange={onChangeCity}
          readOnly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.username}
          placeholder={t('Имя пользователя')}
          onChange={onChangeUsername}
          readOnly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.avatar}
          placeholder={t('Ссылка на аватар')}
          onChange={onChangeAvatar}
          readOnly={readonly}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
