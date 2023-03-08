import { memo } from 'react';
import { classNames } from 'shared/lib';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
}

export const Text = memo(({
  className,
  title = '',
  text = '',
  align = TextAlign.LEFT,
  theme = TextTheme.PRIMARY
}: TextProps) => {
  return (
    <div className={classNames(cls.text, {}, [className, cls[theme], cls[align]])}>
      {Boolean(title) && <p className={cls.title}>{title}</p>}
      {Boolean(text) && <p className={cls.text}>{text}</p>}
    </div>
  );
});
