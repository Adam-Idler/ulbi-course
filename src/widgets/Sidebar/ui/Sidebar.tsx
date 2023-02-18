import type { FC } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme, Button, ButtonSize, ButtonTheme } from 'shared/ui';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import AboutIcon from '../../assets/icons/about-20-20.svg';
import MainIcon from '../../assets/icons/main-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className = '' }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const { t: about } = useTranslation('about');

  const onToggle = (): void => {
    setCollapsed(prev => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.items}>
        <AppLink
          to={RoutePath.main}
          theme={AppLinkTheme.SECONDARY}
          className={cls.item}
        >
          <MainIcon className={cls.icon} />

          <span className={cls.link}>
            {t('Главная')}
          </span>
        </AppLink>

        <AppLink
          to={RoutePath.about}
          theme={AppLinkTheme.SECONDARY}
          className={cls.item}
        >
          <AboutIcon className={cls.icon} />

          <span className={cls.link}>
            {about('О сайте')}
          </span>
        </AppLink>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          short={collapsed}
          className={cls.lang}
        />
      </div>
    </div>
  );
};
