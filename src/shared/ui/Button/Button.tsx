import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = ({
  className = '',
  square = false,
  size = ButtonSize.M,
  children,
  theme = '',
  ...forwardingProps
}) => {
  const mods: Record<string, boolean> = {
    [cls.square]: square
  };

  return (
    <button
      type="button"
      className={classNames(cls.button, mods, [className, cls[theme], cls[size]])}
      {...forwardingProps}
    >
      {children}
    </button>
  );
};
