import { type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  theme = AppLinkTheme.PRIMARY,
  to,
  ...forwardingProps
}) => {
  return (
    <Link
      to={to}
      className={classNames(cls.applink, {}, [className, cls[theme]])}
      {...forwardingProps}
    >
      {children}
    </Link>
  );
};
