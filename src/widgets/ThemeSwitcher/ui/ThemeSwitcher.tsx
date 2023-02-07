import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib";
import cls from './ThemeSwitcher.module.scss';
import LightIcon from '../../assets/icons/theme-light.svg';
import DarkIcon from '../../assets/icons/theme-dark.svg';
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
}
