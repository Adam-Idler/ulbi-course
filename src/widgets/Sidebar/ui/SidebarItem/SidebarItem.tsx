import { getUserAuthData } from 'entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { type SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { path, text, Icon } = item;
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (Boolean(item.authOnly) && !isAuth) {
    return null;
  }

  return (
    <AppLink
      to={path}
      theme={AppLinkTheme.SECONDARY}
      className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
    >
      <Icon className={cls.icon} />

      <span className={cls.link}>
        {t(text)}
      </span>
    </AppLink>
  );
});
