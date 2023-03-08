import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme, Text } from 'shared/ui';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className = '' }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    void dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {(readonly === true)
        ? (
        <Button className={cls.editBtn} onClick={onEdit}>
          {t('Редактировать')}
        </Button>
          )
        : (
          <>
            <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
              {t('Отменить')}
            </Button>

            <Button className={cls.saveBtn} onClick={onSave}>
              {t('Сохранить')}
            </Button>
          </>
          )}
    </div>
  );
};
