import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import cls from './NotFountPage.module.scss';

interface NotFountPageProps {
  className?: string
}

export const NotFountPage: FC<NotFountPageProps> = ({ className = '' }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.notFountPage, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  );
};
