import { memo, type ReactNode, type ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAD_INVERTED = 'clearInverted',
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
  disabled?: boolean
  children?: ReactNode
}

export const Button = memo(({
  className,
  square = false,
  size = ButtonSize.M,
  children,
  theme = ButtonTheme.OUTLINE,
  disabled = false,
  ...forwardingProps
}: ButtonProps) => {
  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls.disabled]: disabled
  };

  return (
    <button
      type="button"
      className={classNames(cls.button, mods, [className, cls[theme], cls[size]])}
      disabled={disabled}
      {...forwardingProps}
    >
      {children}
    </button>
  );
});
