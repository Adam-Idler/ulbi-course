import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className = '' }) => {
  const { t } = useTranslation();
  const { t: about } = useTranslation('about');

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={cls.mainLink}>{t('Главная')}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>{about('О сайте')}</AppLink>
      </div>
    </div>
  );
};
