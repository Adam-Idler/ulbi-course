import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import LightIcon from '../../assets/icons/theme-light.svg';
import DarkIcon from '../../assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shared/ui';
import { memo } from 'react';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className = '' }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
});
